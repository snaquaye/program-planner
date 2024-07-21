"use client";

import { saveUserAccount } from "@/app/actions/user-actions";
import { genders, roles } from "@/app/constants";
import { FormState } from "@/lib/type";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { User } from "@prisma/client";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import Button from "../button";
import ErrorMessage from "../error-message";

const initialState = {} as FormState;

type Props = {
  user?: User;
};

export default function UserForm({ user }: Props) {
  const [state, formAction] = useFormState(saveUserAccount, initialState);
  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    return () => {
      state.error = {};
    };
  });

  return (
    <>
      <form
        className="form"
        action={async (formData: FormData) => {
          await formAction(formData);

          ref.current?.reset();
        }}
        ref={ref}
      >
        <p className="w-full border-b-[1px]">
          Complete the form to create a user account
        </p>

        {user && <input type="hidden" value={user?.id} name="id" />}

        <div className="form-group">
          <label htmlFor="name">What is the user&apos;s full name?</label>
          <input name="name" placeholder="Full name" value={user?.name} />
          {state.error && <ErrorMessage messages={state.error["name"]} />}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Pick user&apos;s gender?</label>
          <select name="gender" title="Select user's gender">
            <option value=""></option>
            {genders.map((gender, index) => (
              <option
                value={gender}
                key={index}
                selected={user?.gender === gender}
              >
                {gender}
              </option>
            ))}
          </select>
          {state.error && <ErrorMessage messages={state.error["gender"]} />}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Pick user&apos;s role?</label>
          <select name="role" title="Select user's role">
            <option value=""></option>
            {roles.map((role, index) => (
              <option value={role} key={index} selected={user?.role === role}>
                {role}
              </option>
            ))}
          </select>
          {state.error && <ErrorMessage messages={state.error["role"]} />}
        </div>

        <div className="form-group">
          <label htmlFor="email">What is his/her email?</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={user?.email}
          />
          {state.error && <ErrorMessage messages={state.error["email"]} />}
        </div>

        {!user && (
          <div className="form-group">
            <label htmlFor="password" className="flex justify-between">
              <span>Provide password</span>
              <span className="text-xs text-blue-600 flex items-center space-x-2">
                <InformationCircleIcon
                  width={20}
                  title="Users would be asked to change their password on login"
                />
              </span>
            </label>
            <input name="password" type="password" placeholder="password" />
            {state.error && <ErrorMessage messages={state.error["password"]} />}
          </div>
        )}

        <div className="form-group">
          <Button
            title={user?.id !== undefined ? "Edit User" : "Create user account"}
          />
        </div>
      </form>
    </>
  );
}
