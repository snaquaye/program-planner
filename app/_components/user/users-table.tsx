"use client";

import { useState } from "react";
import { User } from "@prisma/client";
import UserStatus from "../user-status";
import Link from "next/link";
import LastSeen from "../last-seen";
import moment from "moment";
import { EyeIcon, TrashIcon } from "@heroicons/react/20/solid";
import Alert from "../alert";
import useAlertStore from "../alert/alert-store";

type Props = {
  users: User[];
  deleteFunction: (id: string) => void;
};

export default function UserListTable({ users, deleteFunction }: Props) {
  const [item, setItem] = useState("");
  const { isOpen, open, close } = useAlertStore();

  return (
    <div className="mt-6 hidden md:flex">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="bg-slate-50">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Last Seen</th>
            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="odd:bg-white even:bg-slate-50">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">
                <UserStatus status={user.status as "inactive" | "active"} />
              </td>
              <td className="px-4 py-2">
                <LastSeen date={moment(user.lastLogin!).format("LLL")} />
              </td>
              <td className="px-4 py-2 flex items-center space-x-2">
                <Link
                  href={`/users/${user.id}`}
                  title="View"
                  className="bg-green-500 p-2 rounded-[3px] text-white"
                >
                  <EyeIcon width={20} height={20} />
                </Link>
                <form
                  action={() => {
                    setItem(user.id);
                    open();
                  }}
                  className="p-0 mt-0 mb-0"
                >
                  <input type="hidden" value={user.id} />
                  <button className="!mt-0 bg-red-500" title="Delete">
                    <TrashIcon width={20} height={20} />
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Alert
        action={deleteFunction}
        title="Delete user account"
        description="This user account would be deleted"
        message="Are you sure you want to delete this user account?"
        buttonTitle="Delete"
        isOpen={isOpen}
        closeDialog={close}
        data={item}
      />
    </div>
  );
}
