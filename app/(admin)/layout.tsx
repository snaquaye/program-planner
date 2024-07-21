import { auth } from "@/auth";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../_components/navbar";
import Topbar from "../_components/topbar";

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <div className="min-h-screen bg-gray-800 flex overflow-x-hidden max-w-full">
      <div className="hidden lg:flex flex-grow-0 flex-shrink-0 basis-[10%] flex-col justify-between">
        <div className="pl-6 pt-6 pr-4 flex flex-col">
          <div className="flex space-x-2">
            <Image
              alt="COZA logo"
              src={"/COZA-Logo-New-White.png"}
              width={50}
              height={50}
            />
            <div className="leading-none text-gray-400 font-bold md:text-lg text-2xl">
              <div>Programme</div>
              <div>Manager</div>
            </div>
          </div>

          <Navbar />
        </div>
        <div className="pl-6 py-4 border-t-[1px] border-gray-700">
          <Link href={"#"} className="text-gray-400 flex space-x-4">
            <Cog6ToothIcon width={20} className="pr-2" /> Settings
          </Link>
        </div>
      </div>
      <div className="bg-[#dfecf2] rounded-s flex-1">
        <Topbar session={session!} />
        <div className="m-4 pt-4 px-4">{children}</div>
      </div>
    </div>
  );
}
