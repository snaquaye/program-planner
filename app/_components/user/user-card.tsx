import { User } from "@prisma/client";
import Card from "../card";
import Image from "next/image";
import UserStatus from "../user-status";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <Card>
      <div className="flex p-2 space-x-2 bg-white">
        <div className="max-w-[20%] max-h-40 rounded-full">
          <Image
            src={user.profileImageUrl || "/avatar.jpg"}
            alt="Profile image"
            width={100}
            height={100}
            objectFit="cover"
          />
        </div>
        <div>
          <p>
            <b>Name:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Role:</b> {user.role}
          </p>
          <p>
            <b>Status:</b>{" "}
            <UserStatus status={user.status as "inactive" | "active"} />
          </p>
        </div>
      </div>
      <div className="flex space-x-4 p-2 bg-white justify-end border-t-[0.5px]">
        <button type="button" className="bg-green-500">
          View
        </button>
        <form action="" className="p-0 m-0 max-w-fit">
          <input type="hidden" value={user.id} />
          <button type="button" className="bg-red-500 !mt-0">
            Delete
          </button>
        </form>
      </div>
    </Card>
  );
}
