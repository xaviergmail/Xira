import { Issue } from "./API"

function time(date?: string): number {
  return Date.parse(date ?? "") ?? 0
}

export function lastUpdated(issue: Issue) {
  return Math.max(
    ...[
      issue.createdAt,
      issue.updatedAt,
      ...issue.comments?.items?.map((x) => x.createdAt),
      ...issue.comments?.items?.map((x) => x.updatedAt),
    ].map(time)
  )
}
