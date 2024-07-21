import PageTitle from "@/app/_components/page-title";
import prisma from "@/lib/db";
import { redirect, useParams } from "next/navigation";
import UserForm from "@/app/_components/user/user-form";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserDetail(props: Props) {
  const { userId } = props.params;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    redirect("/users?message=User not found");
  }

  return (
    <>
      <PageTitle title="Edit User Account" />
      <div className="mt-4 rounded-sm bg-white shadow-sm">
        <div className="w-full md:w-[50%] mx-auto">
          <UserForm user={user} />
        </div>
      </div>
    </>
  );
}
