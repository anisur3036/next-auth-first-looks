"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";
import db from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Something went wrong." };
  }

  const { name, email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const userExits = await getUserByEmail(email);

  if (userExits) {
    return { error: "Email already taken!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User added!" };
};
