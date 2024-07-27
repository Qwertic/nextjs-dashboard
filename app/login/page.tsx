import LoginForm from "@/app/ui/login-form";
import { Metadata } from "next";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex items-center justify-center md:h-screen mx-auto">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <LoginForm />
        </Card>
      </main>
    </ThemeProvider>
  );
}
