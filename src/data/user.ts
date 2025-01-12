import prisma from "@/lib/prisma";

export const findUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const findUserById = async (id: string) => {
  try {
    const user = prisma.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};
