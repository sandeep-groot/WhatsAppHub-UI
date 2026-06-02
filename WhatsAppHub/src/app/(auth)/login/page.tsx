import SignInForm from "@/components/auth/SignInForm";

export const metadata = {
  title: "Login | WhatsAppHub",
  description: "Sign in to your WhatsAppHub account",
};

export default function LoginPage() {
  return (
    <div>
      <SignInForm />
    </div>
  );
}
