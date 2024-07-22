"use client";

import { saveFacilitator } from "@/app/actions/facilitator-actions";
import { FormState } from "@/lib/type";
import { Facilitator } from "@prisma/client";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import Button from "../button";

type Props = {
  data?: Facilitator;
};

const initialState = {} as FormState;

export default function FacilitatorForm({ data }: Props) {
  const [state, formAction] = useFormState(saveFacilitator, initialState);
  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    return () => {
      state.error = {}
    }
  });

  return (
    <form className="form" action={async (payload) => {
      await formAction(payload);

      ref.current?.reset();
    }}>
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
        <Button title={data?.id ? "Edit Facilitator" : "Save Facilitator"} />
      </div>
    </form>
  );
}
