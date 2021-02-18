import { API, Auth, graphqlOperation } from "aws-amplify"
import React, { useEffect, useState } from "react"
import { Issue, ListIssuesQuery } from "../src/API"
import { listIssues } from "../src/graphql/queries"

export interface IAppProps {}

export default function IssueList() {
  const [issues, updateIssues] = useState<Array<Issue>>([])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    //   const issues = await GraphQLAPI.graphql({ query: listIssues })
    //   issues.listIssues.
    const list = (await API.graphql(graphqlOperation(listIssues))) as {
      data: ListIssuesQuery
    }
    updateIssues(list.data.listIssues.items)
  }

  return (
    <div>
      {issues.map((issue) => (
        <div key={issue.id} className="bg-gray-300 odd:bg-gray-200">
          <h1>{issue.title}</h1>
        </div>
      ))}
    </div>
  )
}
