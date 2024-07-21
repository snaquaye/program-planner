"use client";

import { FormState } from "@/lib/type";
import { Facilitator } from "@prisma/client";
import { useRef } from "react";
import { useFormState } from "react-dom";

type Props = {
  data?: Facilitator;
}

const initialState = {} as FormState;

export default function FacilitatorForm({ data }: Props) {
  const [state, formAction] = useFormState(_, initialState);
  const ref = useRef<HTMLFormElement | null>(null);

  return (
    <form className="form">
      <p className="w-full border-b-[1px]">
        Complete the form to create a user account
      </p>

      <input type="hidden" value={data?.id} />

      <div className="form-group">
        <label htmlFor="name">Facilitator&apos;s name</label>
        <input name="name" value={data?.name} />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone number</label>
        <input name="phoneNumber" value={data?.phoneNumber} />
      </div>

      <div className="form-group">
        <button type="submit">
          Add Facilitator
        </button>
      </div>
    </form>
  );
} 