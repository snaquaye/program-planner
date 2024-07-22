import FacilitatorForm from "@/app/_components/facilitator/facilitator-form";
import PageTitle from "@/app/_components/page-title";

export default async function AddFacilitator() {
  return (
    <>
      <PageTitle title="Add Facilitator" />
      <div className="bg-white shadow-sm p-4 mt-4 rounded-sm">
        <div className="w-full md:w-[50%] mx-auto">
          <FacilitatorForm />
        </div>
      </div>
    </>
  );
}
