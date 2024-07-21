"use client";

import { useFormState } from "react-dom";
import Button from "../button";
import Link from "next/link";
import { authenticate } from "@/app/actions/authenticate";
import { ArrowRightIcon, ExclamationCircleIcon } from "@heroicons/react/16/solid";
import { useActionState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [errorMessage, formAction] = useFormState(authenticate, undefined);

  if (errorMessage) {
    toast.error(errorMessage, {
      position: "top-right",
    });
  }

  return (
    <form className="bg-white shadow-md rounded" action={formAction}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input placeholder="Email" name="email" className="" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input placeholder="Password" name="password" type="password" />
        <Link
          href={"/auth/forgot-password"}
          className="text-right text-blue-500"
        >
          Forgot password?
        </Link>
      </div>

      <div className="form-group">
        <Button title="Sign In" />
      </div>
    </form>
  );
}