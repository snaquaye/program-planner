"use client";

type Props = {
  date: string | null,
}

export default function LastSeen({date}: Props) {
  return <>
    {date === "Invalid date" && <p>Not logged in</p>}
    {date !== "Invalid date" && <p>date</p>}
  </>;
}