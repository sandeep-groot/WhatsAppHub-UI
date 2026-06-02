/**
 * Auth client hooks - use these on the client side for authentication
 */

"use client";

import { useCallback } from "react";
import { LoginRequest, LoginResponse } from "../types";

export function useLogin() {
  const login = useCallback(async (credentials: LoginRequest) => {
    // Implement login logic
    console.log("Login with:", credentials);
  }, []);

  return { login };
}

export function useLogout() {
  const logout = useCallback(async () => {
    // Implement logout logic
    console.log("Logging out");
  }, []);

  return { logout };
}

export function useCurrentUser() {
  // Get current user from session/context
  return { user: null, isLoading: false };
}
