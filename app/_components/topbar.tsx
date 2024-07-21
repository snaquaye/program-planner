'use client';

import { Bars4Icon } from "@heroicons/react/20/solid";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { Session } from "next-auth";
import UserInfo from "./user-info";
import Drawer from "./drawer";
import Navbar from "./navbar";
import useDrawerStore from "./drawer/drawer-store";

type Props = {
  session: Session;
};

export default function Topbar({ session }: Props) {
  const {toggleDrawer, isOpen, closeDrawer, openDrawer} = useDrawerStore()

  return (
    <>
      <div className="bg-gray-900 lg:bg-[#d0e1e9] px-2 py-4 flex items-center">
        <button
          type="button"
          onClick={toggleDrawer}
          title="Toggle Menu"
          className="lg:hidden bg-[#d8e8f0] shadow-sm"
        >
          <Bars4Icon className="text-black" width={30} />
        </button>
        <div className="flex space-x-4 justify-end flex-wrap w-full">
          <div className="hidden lg:flex space-x-4">
            <EnvelopeIcon className="text-gray-600" width={30} />
            <BellIcon className="text-gray-600" width={30} />
          </div>
          <UserInfo name={session.user?.name!} />
        </div>
      </div>

      <Drawer isOpen={isOpen} closeDrawer={closeDrawer} openDrawer={openDrawer}>
        <Navbar />
      </Drawer>
    </>
  );
}
