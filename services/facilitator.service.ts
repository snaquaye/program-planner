import prisma from "@/lib/db";
import logError from "@/lib/logError";
import { AddFacilitatorSchema, UpdateFacilitatorSchema } from "@/lib/schema";
import { ErrorResponse } from "@/lib/type";
import { Facilitator } from "@prisma/client";

const facilitatorService = {
  async saveFacilitator(data: Partial<Facilitator>): Promise<ErrorResponse> {
    const result = data.id ? UpdateFacilitatorSchema.safeParse(data) : AddFacilitatorSchema.safeParse(data);

    if (!result.success) {
      return {
        success: result.success,
        message: "Form validation failed",
        error: result.error.flatten().fieldErrors
      }
    }

    let facilitator = result.data as Facilitator

    try {
      await prisma.facilitator.upsert({
        create: facilitator,
        update: facilitator,
        where: {
          id: data.id
        }
      });
    } catch (error) {
      logError(error as Error)
      return {
        success: false,
        message: (error as Error).message
      }
    }

    return {
      success: false,
      message: "Facilitator added successfully"
    }
  }
}

export default facilitatorService;
