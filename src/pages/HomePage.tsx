import React, { useContext } from "react"
import IssueList from "../components/IssueList"
import { UserContext } from "../store/user"

export default function Home() {
  const user = useContext(UserContext)

  return (
    <div className="container mx-auto p-2">
      <main>
        <h1>Welcome to Xira!</h1>
        <IssueList />
      </main>
    </div>
  )
}
