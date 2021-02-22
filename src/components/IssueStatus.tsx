import * as Model from "../API"

interface IssueStatusProps {
  issue: Model.Issue
}

export default function IssueStatus({ issue }: IssueStatusProps) {
  return issue.status !== "closed" ? (
    <span className="bg-green-500 p-1 text-white text-xs font-medium rounded">
      OPEN
    </span>
  ) : (
    <span className="bg-red-500 p-1 text-white text-xs font-medium rounded">
      CLOSED
    </span>
  )
}
