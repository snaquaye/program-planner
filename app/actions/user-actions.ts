"use server";

import prisma from "@/lib/db";
import { CreateUserSchema, UpdateUserSchema } from "@/lib/schema";
import { FormState } from "@/lib/type";
import UserManager from "@/services/user.manager";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

const db = prisma;

export const saveUserAccount = async (
  prevState: FormState,
  formData: FormData
) => {
  const data = {
    id: formData.get("id"),
    email: formData.get("email"),
    gender: formData.get("gender")!,
    name: formData.get("name"),
    password: formData.get("password"),
    role: formData.get("role"),
  };

  const result =
    data.id !== undefined
      ? UpdateUserSchema.safeParse(data)
      : CreateUserSchema.safeParse(data);
  if (!result.success) {
    prevState.success = false;
    prevState.error = result.error.flatten().fieldErrors;
    prevState.message = "Form validation failed";

    return prevState;
  }

  let user = result.data as User;

  if (user.id) {
    user.password = await UserManager.encodePassword(user, user.password);
    await UserManager.saveUserAccount(user);
  } else {
    await UserManager.saveUserAccount(user);
  }

  revalidatePath("/users");

  prevState.success = true;
  prevState.message =
    "User account created successfully. An email would be sent to the user's account";

  return prevState;
};
