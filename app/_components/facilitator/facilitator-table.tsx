import { Facilitator } from "@prisma/client"

type Props = {
  facilitators: Facilitator[]
}

export default function FacilitatorTable({ facilitators }: Props) {
  if (facilitators.length === 0) {
    return <p>No facilitator has been added</p>
  }

  return (
    <table>
      <thead>
        <tr className="bg-slate-50">
          <th>S/N</th>
          <th>Full name</th>
          <th>Phone number</th>
          <th>Allowed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {facilitators.map((facilitator, index) => (
          <tr key={index} className="odd:bg-white even:bg-slate-50">
            <td>{index + 1}</td>
            <td>{facilitator.name}</td>
            <td>{facilitator.phoneNumber}</td>
            <td>{facilitator.restricted}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}