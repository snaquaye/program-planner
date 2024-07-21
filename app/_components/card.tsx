type Props = {
  children: React.ReactNode,
}

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col rounded-lg shadow-sm">
      {children}
    </div>
  )
}