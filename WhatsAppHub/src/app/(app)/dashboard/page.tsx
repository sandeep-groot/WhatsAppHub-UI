import React from "react";

export const metadata = {
  title: "Dashboard | WhatsAppHub",
  description: "WhatsAppHub dashboard",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Welcome back! Here's what's happening with your WhatsApp business today.
        </p>
      </div>

    </div>
  );
}
