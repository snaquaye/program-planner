"use client";

type Props = {
  name: string;
};

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function UserInfo({ name }: Props) {
  return (
    <div className="flex md:space-x-2">
      <Image
        src={"/profile.png"}
        width={50}
        height={50}
        alt="Profile image"
        className="rounded-full"
      />
      <div className="hidden lg:flex md:flex-col leading-tight self-center">
        <p className="text-gray-700">{name}</p>
        <div className="flex space-x-1">
          <Link className="text-gray-500" href="#">
            View Profile
          </Link>
          <span className="text-gray-500">|</span>
          <button
            className="bg-transparent w-fit p-0 text-gray-500"
            title="Logout"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
