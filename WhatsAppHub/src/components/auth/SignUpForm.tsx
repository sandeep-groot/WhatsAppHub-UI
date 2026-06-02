// Auth components - SignUpForm
"use client";

import { useState } from "react";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement signup logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
    </form>
  );
}
