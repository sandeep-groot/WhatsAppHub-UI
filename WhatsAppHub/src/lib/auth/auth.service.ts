import { API_ROUTES } from "@/lib/constants";
import { ApiError, apiFetch } from "@/lib/http";
import type { LoginResponse } from "@/modules/auth/types";
import { setAuthSession, type StoredAuthUser } from "./index";

/**
 * Sign in via API when available; falls back to a dev session when the auth API is not deployed.
 */
export async function loginWithCredentials(
  email: string,
  password: string,
): Promise<StoredAuthUser> {
  try {
    const data = await apiFetch<LoginResponse>(API_ROUTES.AUTH.LOGIN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const user: StoredAuthUser = {
      email: data.user.email,
      name: data.user.name,
    };
    setAuthSession(data.token, user, data.refreshToken);
    return user;
  } catch (err) {
    if (
      err instanceof ApiError &&
      (err.status === 404 || err.status === 502 || err.status === 503)
    ) {
      return loginDevFallback(email, password);
    }
    if (err instanceof TypeError) {
      // Network / fetch failed (API not running)
      return loginDevFallback(email, password);
    }
    throw err;
  }
}

function loginDevFallback(email: string, password: string): StoredAuthUser {
  if (!email.trim() || !password) {
    throw new ApiError(400, "Email and password are required.");
  }
  const user: StoredAuthUser = { email: email.trim() };
  setAuthSession(`dev-${Date.now()}`, user);
  return user;
}
