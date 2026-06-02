/**
 * Layout for auth routes
 * All auth pages (login, signup, forgot-password) use this layout
 */

export const metadata = {
  title: "Authentication | WhatsAppHub",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
