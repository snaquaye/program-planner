"use client";

import { useFormStatus } from "react-dom";

type ButtonProps = {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  const {pending} = useFormStatus()

  return (
    <button disabled={pending}> {title} </button>
  )
}

export default Button;
