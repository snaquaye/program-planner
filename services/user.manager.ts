import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import prisma from "../lib/db";
import UserService from "./user.service";

const UserManager = {
  async getUserByEmail(email: string): Promise<Partial<User> | null> {
    return await UserService.getUserByEmail(email);
  },

  async verifyPassword(
    user: Partial<User>,
    plainPassword: string
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, user.password!);
  },

  async changePassword(
    user: User,
    password: string,
    oldPassword: string
  ): Promise<User> {
    if (!(await UserManager.verifyPassword(user, oldPassword))) {
      throw new Error("Invalid your password.");
    }

    return await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...user,
        password: password,
      },
    });
  },

  async generateUserHash(
    user: Pick<User, "email" | "gender" | "name" | "role">
  ) {
    const hash = bcrypt.hashSync(JSON.stringify(user));

    return hash;
  },

  async encodePassword(user: User, password: string) {
    const secret = await UserManager.generateUserHash(user);

    return bcrypt.hash(password, secret);
  },

  async saveUserAccount(user: User): Promise<User> {
    const secret = await UserManager.generateUserHash(user);

    user.password = bcrypt.hashSync(user.password, secret);
    return await prisma.user.upsert({
      where: {
        id: user.id || "",
      },
      create: user,
      update: user,
    });
  },

  async updateUserAccount(user: Partial<User>) {
    return await prisma.user.upsert;
  },
};

export default UserManager;
