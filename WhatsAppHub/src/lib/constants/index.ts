/**
 * Application constants
 */

export const APP_NAME = "WhatsAppHub";
export const APP_VERSION = "1.0.0";

export const API_ROUTES = {
  AUTH: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    SIGNUP: "/api/auth/signup",
    REFRESH: "/api/auth/refresh",
  },
  CLIENTS: "/api/clients",
  WEBHOOKS: "/api/webhooks",
  USERS: "/api/users",
  ROLES: "/api/roles",
  AUDIT_LOGS: "/api/audit-logs",
} as const;

export const PAGE_ROUTES = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  CLIENTS: "/clients",
  ONBOARDING: "/onboarding",
  WEBHOOKS: "/webhook",
  AUDIT_LOGS: "/audit-logs",
  USERS: "/users",
  ROLES: "/roles",
  SETTINGS: "/settings",
} as const;
