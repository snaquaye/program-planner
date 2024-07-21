import UserCardList from "@/app/_components/user/user-cards-list";
import UserListTitle from "@/app/_components/user/user-list-title";
import UserListTable from "@/app/_components/user/users-table";
import prisma from "@/lib/db";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  const deleteUser = async (id: string) => {
    await prisma.user.delete({
      where: {
        id
      }
    });
  }

  return (
    <div className="w-full flex flex-col">
      <UserListTitle users={users} />
      <div className="max-h-[70%] md:bg-white p-2 mt-4 md:rounded-sm md:shadow-sm w-full">
        <div className="flex justify-between">
          <div className="flex space-x-3 px-2">
            <select className="focus:outline-none p-0 pl-2 hidden md:block" title="User type">
              <option value="" className="text-gray-400">
                User type
              </option>
            </select>

            <div className="border-gray-200 border-[1px] rounded-md flex p-0 pl-2">
              <input
                title="search"
                type="text"
                className="border-none focus:outline-none min-w-fit p-0 pl-2"
                placeholder="Search user"
              />
              <button
                type="button"
                className="bg-blue-900 rounded-s-none p-4 border-[2px] border-blue-900"
                title="search"
              >
                <MagnifyingGlassIcon width={20} height={20} />
              </button>
            </div>
          </div>
        </div>

        <UserListTable users={users} />
        <UserCardList users={users} />
      </div>
    </div>
  );
}
