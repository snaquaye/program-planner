import { User } from "next-auth";
import UserManager from "./user.manager";

const AuthService = {
  async login(email: string, password: string) {
    const user = await UserManager.getUserByEmail(email);

    if (!user) {
      return null;
    }
    
    const isValid = UserManager.verifyPassword(user, password);

    if (!isValid) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      image: user.profileImageUrl,
      name: user.name,
    };
  }
}

export default AuthService;
