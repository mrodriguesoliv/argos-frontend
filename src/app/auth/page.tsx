import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import Link from "next/link";
import LoginForm from "./_components/login-form";

const LoginPage = () => {
  return (  
    <section className="container w-full flex h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-md flex flex-col justify-center space-y-6 ">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome!
          </h1>

          <p className="text-sm text-muted-foreground">
            Enter your email and password to sign in to your account.
          </p>

        </div>

        <LoginForm />

      </div>

    </section>
  );
};

export default LoginPage;
