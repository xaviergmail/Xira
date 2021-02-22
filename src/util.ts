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

interface HasCreatedAt {
  createdAt?: string,
}

export function sortCreatedAtNewest(items: Array<HasCreatedAt>) {
  return items.sort((a, b) => time(b.createdAt) - time(a.createdAt))
}

export function sortCreatedAtOldest(items: Array<HasCreatedAt>) {
  return items.sort((a, b) => time(a.createdAt) - time(b.createdAt))
}

interface HasUpdatedAt {
  createdAt?: string,
}

export function sortUpdatedAt(items: Array<HasUpdatedAt>) {
  return items.sort((a, b) => time(a.createdAt) - time(b.createdAt))
}