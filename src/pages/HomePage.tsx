import React from "react"
import IssueList from "../components/IssueList"

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <main className="mt-4">
        <h1 className="mb-8 text-center text-3xl font-medium">
          What do you want to work on today?
        </h1>
        <IssueList />
      </main>
    </div>
  )
}
