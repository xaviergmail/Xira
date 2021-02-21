import { API, Auth, graphqlOperation } from "aws-amplify"
import React, { useEffect, useState } from "react"
import { CreateIssueMutation, Issue, ListIssuesQuery } from "../API"
import { listIssues } from "../graphql/queries"
import { onCreateIssue } from "../graphql/subscriptions"
import Observable from "zen-observable-ts"
import { Link } from "react-router-dom"

export interface IAppProps {}

export default function IssueList() {
  const [issues, updateIssues] = useState<Array<Issue>>([])

  useEffect(() => {
    getIssues()
    subscribeIssues()
  }, [])

  async function getIssues() {
    const {
      data: {
        listIssues: { items: issues },
      },
    } = (await API.graphql(graphqlOperation(listIssues))) as {
      data: ListIssuesQuery
    }
    updateIssues(issues)
  }

  async function subscribeIssues() {
    const observable = (await API.graphql(
      graphqlOperation(onCreateIssue)
    )) as Observable<any>

    observable.subscribe(
      ({
        value: {
          data: { onCreateIssue: issue },
        },
      }) => {
        console.log("New issue", issue)
        updateIssues((issues) => [issue, ...issues])
      }
    )
  }

  return (
    <div>
      {issues.map((issue) => (
        <Link to={"/issue/" + issue.id} key={issue.id}>
          <div className="bg-gray-300 odd:bg-gray-200">
            <h1>{issue.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}
