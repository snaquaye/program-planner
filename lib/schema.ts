import { z } from "zod";

export const CredentialSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(5),
});

export const CreateUserSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  role: z.string().min(1, "Role is required"),
  gender: z.string().min(1, "Gender is required"),
});

export const UpdateUserSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email().min(1, "Email is required"),
  role: z.string().min(1, "Role is required"),
  gender: z.string().min(1, "Gender is required"),
});

export const AddFacilitatorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string()
    .min(7, "Phone numbers must be 7 digits minimum")
    .max(15, "Phone number cannot contain more than 15 digits")
});

export const UpdateFacilitatorSchema = AddFacilitatorSchema.extend({
  id: z.string(),
  restricted: z.boolean()
})
