import Head from "next/head"
import React, { useContext } from "react"
import CreateIssue from "../components/CreateIssue"
import IssueList from "../components/IssueList"
import { UserContext } from "../src/store/user"

export default function Home() {
  const user = useContext(UserContext)

  return (
    <div className="container mx-auto p-2">
      <Head>
        <title>cool title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Xira!</h1>
        <IssueList />
      </main>
    </div>
  )
}
