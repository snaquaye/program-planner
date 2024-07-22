"use server";

import { FormState } from "@/lib/type";
import facilitatorService from "@/services/facilitator.service";
import { Facilitator } from "@prisma/client";

export async function saveFacilitator(prevState: FormState, formData: FormData) {
  const facilitator = {
    name: formData.get("name"),
    phoneNumber: formData.get("phoneNumber")
  } as Facilitator;

  const result = await facilitatorService.saveFacilitator(facilitator);

  return {...result};
}
