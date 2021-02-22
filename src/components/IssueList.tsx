import { API, graphqlOperation } from "aws-amplify"
import React, { useEffect, useState } from "react"
import { Issue, ListIssuesQuery } from "../API"
import { onCreateIssue } from "../graphql/subscriptions"
import Observable from "zen-observable-ts"
import { Link } from "react-router-dom"
import ReactTimeago from "react-timeago"
import ProfilePic from "./ProfilePic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons"
import LinesEllipsis from "react-lines-ellipsis"
import gql from "graphql-tag"
import { lastUpdated, sortCreatedAtNewest } from "../util"
import IssueStatus from "./IssueStatus"

export interface IAppProps {}

function IssuePreview({ issue }: { issue: Issue }) {
  return (
    <Link to={"/issue/" + issue.id} className="p-2">
      <div className="flex flex-col mt-4">
        <div className="flex justify-between align-baseline">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <h1 className="mr-4">{issue.title}</h1>
            <IssueStatus issue={issue} />
          </div>
          <div className="flex items-center text-gray-500">
            <span className="pr-4">
              {issue.comments.items.length ?? 0}{" "}
              <FontAwesomeIcon icon={faCommentAlt} />
            </span>
            <ProfilePic />
          </div>
        </div>

        <div className="flex justify-between align-baseline mt-1">
          <span className="text-sm text-gray-400">
            Posted <ReactTimeago date={issue.createdAt} /> by {issue.owner}
          </span>

          <span className="text-sm text-gray-400">
            Last Updated <ReactTimeago date={lastUpdated(issue)} />
          </span>
        </div>
        <div className="max-w-prose mb-4 mt-2">
          <LinesEllipsis text={issue.text} maxLine={3} component="p" />
        </div>
      </div>
    </Link>
  )
}

const listIssues = gql`
  query ListIssues {
    listIssues {
      items {
        id
        owner
        status
        text
        title
        createdAt
        updatedAt
        comments {
          items {
            id
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`

export default function IssueList() {
  const [issues, updateIssues] = useState<Array<Issue>>([])

  useEffect(() => {
    getIssues()
    subscribeIssues()
  }, [])

  async function getIssues() {
    let {
      data: {
        listIssues: { items: issues },
      },
    } = (await API.graphql(graphqlOperation(listIssues))) as {
      data: ListIssuesQuery
    }

    sortCreatedAtNewest(issues)
    console.log("issues", issues, "issues")
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
    <div className=" mx-auto flex flex-col divide-y divide-gray-200">
      {issues.map((issue) => (
        <div key={issue.id}>
          <IssuePreview issue={issue} />
        </div>
      ))}
    </div>
  )
}
