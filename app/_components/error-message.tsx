type Props = {
  messages: string[],
}

export default function ErrorMessage({messages}: Props) {
  return (
    <ul className="text-red-600 text-sm">
      {(messages||[]).map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
}