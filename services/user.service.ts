import { User } from "@prisma/client";
import prisma from "../lib/db";

const UserService = {
  async getUserByEmail(email: string): Promise<Partial<User> | null> {
    return await prisma.user.findFirst({
      where: { email },
      select: {
        email: true,
        name: true,
        lastLogin: true,
        profileImageUrl: true,
        role: true,
        password: true,
      },
    });
  },

  async getUserById(id: string): Promise<Partial<User> | null> {
    return await prisma.user.findFirst({
      where: { id },
      select: {
        email: true,
        name: true,
        lastLogin: true,
        profileImageUrl: true,
        role: true,
      },
    });
  },

  async getUsers(
    search: string,
    page: number = 1,
    limit: number = 10
  ): Promise<Partial<User>[]> {
    const where: any = {};

    if (search.length > 0) {
      where["OR"] = [
        {
          email: {
            contains: search,
          },
        },
        {
          name: {
            contains: search,
          },
        },
      ];
    }

    return await prisma.user.findMany({
      where,
      select: {
        email: true,
        name: true,
        lastLogin: true,
        profileImageUrl: true,
        role: true,
      },
      skip: (page - 1) * limit,
      take: limit
    });
  },
};

export default UserService;
