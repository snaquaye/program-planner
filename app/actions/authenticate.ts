"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(prevSate: string | undefined, formData: FormData) {
  console.log(formData)
  try {
    console.log(prevSate)
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return 'Invalid credentials.';
        default:
          return error.cause?.err?.message;
      }
    }

    throw error;
  }
}