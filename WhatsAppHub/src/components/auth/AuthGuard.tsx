// Auth Guard component - protects routes from unauthorized access
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated } from "@/lib/auth";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticated = isAuthenticated();
    if (!authenticated) {
      router.push("/login");
    } else {
      setIsAuthed(true);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthed) {
    return null;
  }

  return <>{children}</>;
}
