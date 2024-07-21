import { UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  title: string;
}

export default function PageTitle({title, children}: Props) {
  return (
    <div className="flex justify-between">
      <h1>{title}</h1>
      {children}
    </div>
  );
}