"use client";

import { isAuthenticated } from "@/lib/auth";
import { PAGE_ROUTES } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const authed = isAuthenticated();
    if (!authed) {
      const loginUrl = new URL(PAGE_ROUTES.LOGIN, window.location.origin);
      if (pathname && pathname !== PAGE_ROUTES.LOGIN) {
        loginUrl.searchParams.set("redirect", pathname);
      }
      router.replace(loginUrl.pathname + loginUrl.search);
      setAllowed(false);
    } else {
      setAllowed(true);
    }
    setIsChecking(false);
  }, [pathname, router]);

  if (isChecking) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}
