"use server";

import { z } from "zod";
import { LoginSchema, RegisterSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (! validatedFields.success) {
    return { error: "Invalid login."}
  }

  return { success: "Email send!"}
};

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (! validatedFields.success) {
    return { error: "Something went wrong."}
  }

  return { success: "User added!"}
};
