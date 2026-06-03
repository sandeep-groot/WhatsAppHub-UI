"use client";

import { loginWithCredentials } from "@/lib/auth/auth.service";
import {
  clearAuthSession,
  getStoredUser,
  isAuthenticated as checkAuthenticated,
  type StoredAuthUser,
} from "@/lib/auth";
import { PAGE_ROUTES } from "@/lib/constants";
import { ApiError } from "@/lib/http";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: StoredAuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<StoredAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authed = checkAuthenticated();
    setIsAuthenticated(authed);
    setUser(authed ? getStoredUser() : null);
    setIsLoading(false);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    try {
      const loggedInUser = await loginWithCredentials(email, password);
      setIsAuthenticated(true);
      setUser(loggedInUser);
    } catch (err) {
      if (err instanceof ApiError) {
        throw err;
      }
      throw new ApiError(500, "Unable to sign in. Please try again.");
    }
  }, []);

  const logout = useCallback(() => {
    clearAuthSession();
    setIsAuthenticated(false);
    setUser(null);
    router.replace(PAGE_ROUTES.LOGIN);
  }, [router]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
