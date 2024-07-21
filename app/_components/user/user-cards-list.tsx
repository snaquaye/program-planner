import { User } from "@prisma/client"
import Card from "../card";
import Image from "next/image";
import UserStatus from "../user-status";
import UserCard from "./user-card";

type Props = {
  users: User[]
}

export default function UserCardList({ users }: Props) {
  return (
    <div className="flex flex-col space-y-4 md:hidden mt-2">
      {users.map((user) => (
        <Card key={user.id}>
          <UserCard user={user} />
        </Card>
      ))}
    </div>
  );
}