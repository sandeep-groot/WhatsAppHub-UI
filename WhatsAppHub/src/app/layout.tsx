import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsAppHub",
  description: "WhatsApp Business Automation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
