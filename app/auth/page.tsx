import Button from "@/app/_components/button";
import { signIn } from "@/auth";
import { NextPage } from "next";
import Link from "next/link";
import LoginForm from "../_components/forms/login-form";

const auth = async (formData: FormData) => {
  "use server";

  try {
    await signIn("credentials", formData);
    await signIn("credentials", formData);
  } catch (error) {
    return (error as Error).message;
  }
};

const LoginPage: NextPage = () => {
  return (
    <div className="flex flex-col w-1/4 mx-auto space-y-1">
      <h1 className="text-center font-normal">Welcome back</h1>
      <p className="text-center">Please enter your credentials to login</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
