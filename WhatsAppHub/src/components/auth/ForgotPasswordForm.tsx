// Auth components - ForgotPasswordForm
"use client";

import { useState } from "react";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement forgot password logic
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center">
        <p className="text-green-600">
          Password reset link sent to {email}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        Send Reset Link
      </Button>
    </form>
  );
}
