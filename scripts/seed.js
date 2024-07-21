import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient();

const hashedPassword = await bcrypt.hash("coza@2024", 10);

await prisma.user.create({
  data: {
    role: "Admin",
    email: "admin@timer.com",
    name: "Administrator",
    password: hashedPassword,
  },
});
