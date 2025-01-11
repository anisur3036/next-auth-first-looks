"use server";

import { z } from "zod";
import { LoginSchema } from "@/schemas/login-schema";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  console.log(values);
};
