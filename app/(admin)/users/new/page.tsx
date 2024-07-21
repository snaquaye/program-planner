import PageTitle from "@/app/_components/page-title";
import UserForm from "@/app/_components/user/user-form";

type Props = {};

export default function CreateUser(props: Props) {
  return (
    <>
      <PageTitle title={"Create User Account"} />
      <div className="bg-white shadow-sm p-4 mt-4 rounded-sm">
        <div className="w-full md:w-[50%] mx-auto">
          <UserForm />
        </div>
      </div>
    </>
  );
}
