import { SearchParamsType } from "@/lib/type";
import PageTitle from "../../_components/page-title";
import Link from "next/link";
import {UserGroupIcon} from "@heroicons/react/24/outline"
import FacilitatorTable from "@/app/_components/facilitator/facilitator-table";
import prisma from "@/lib/db";

type Props = {
  searchParams: SearchParamsType;
};

function FacilitatorTitle() {
  return (
    <PageTitle title="Facilitators">
      <button>
        <Link
          href={"/facilitators/new"}
          className=" text-white rounded-[3px] flex items-center px-4 bg-black space-x-2"
        >
          <UserGroupIcon width={20} height={20} />
          <span>Add Facilitator</span>
        </Link>
      </button>
    </PageTitle>
  );
}

export default async function Facilitators({ searchParams }: Props) {
  const facilitators = await prisma.facilitator.findMany({
    where: {
      OR: [
        {
          name: {
            contains: searchParams.q,
          }
        },
        {
          phoneNumber: {
            contains: searchParams.q
          }
        }
      ]
    }
  });

  return (
    <div>
      <FacilitatorTitle />
      <FacilitatorTable facilitators={facilitators} />
    </div>
  );
}
