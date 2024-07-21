import bcrypt from "bcryptjs";
import { verify } from "crypto";

const PasswordEncoder = {
  encode: async (password: string) => {
    return await bcrypt.hash(password, 10);
  },

  verify: async (password: string, hashPassword: string) => {
    return await bcrypt.compare(password, hashPassword);
  }
};

export default PasswordEncoder;
