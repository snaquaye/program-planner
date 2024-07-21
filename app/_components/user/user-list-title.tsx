"use client";

import { UserPlusIcon } from "@heroicons/react/24/outline";
import type { User } from "@prisma/client";
import PageTitle from "../page-title";
import Link from "next/link";

type Props = {
  users: User[];
};

export default function UserListTitle({ users }: Props) {
  return (
    <>
      <PageTitle title="User List">
        <Link href={"/users/new"} className=" text-white rounded-[3px] flex items-center px-4 bg-black">
          <UserPlusIcon width={20} height={20} />
          Add User
        </Link>
      </PageTitle>
    </>
  );
}
