type Props = {
  status: "inactive" | "active"
}

export default function UserStatus({status}: Props) {
  return (
    <>
      {status === "active" ? (
        <span className="uppercase text-white bg-green-500 rounded-full p-2 text-xs">
          {status}
        </span>
      ) : (
        <span className="uppercase text-white bg-red-500 rounded-full p-2 text-xs">
          {status}
        </span>
      )}
    </>
  );
}