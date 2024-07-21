"use client";

import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { CalendarIcon, UsersIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import links from "@/lib/data/menu"
import useDrawerStore from "./drawer/drawer-store";

export default function Navbar() {
  const { closeDrawer } = useDrawerStore();
  
  return (
    <div className="flex flex-col space-y-3 pt-4">
      {links.map((link, index) => (
        <Link
          href={link.url}
          key={index}
          className="nav-links text-sm"
          onClick={closeDrawer}
        >
          {link.icon} {link.title}
        </Link>
      ))}
    </div>
  );
}
