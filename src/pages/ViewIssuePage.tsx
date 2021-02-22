import { API, graphqlOperation } from "aws-amplify"
import React, { useEffect, useState } from "react"
import { getIssue } from "../../src/graphql/queries"
import Observable from "zen-observable-ts"
import ReactTimeago from "react-timeago"

import CreateComment from "../components/CreateComment"

import * as Model from "../../src/API"
import { onCreateComment, onUpdateIssue } from "../../src/graphql/subscriptions"
import { Link, useParams } from "react-router-dom"
import { lastUpdated, sortCreatedAtOldest } from "../util"
import ProfilePic from "../components/ProfilePic"

import PacmanLoader from "react-spinners/PacmanLoader"
import IssueStatus from "../components/IssueStatus"

type RouteParams = { issueID: string }

function VSpacer({ classes = "" }) {
  return (
    <div
      className={
        classes + " " + "w-px bg-gray-300 border-r border-gray-300 ml-6 h-6"
      }
    ></div>
  )
}

function Ball() {
  return (
    <div className="flex flex-col flex-shrink w-12">
      <div className="self-center rounded-full w-2 h-2 bg-gray-300"></div>
    </div>
  )
}

function HSpacer() {
  return (
    <div className="h-px bg-gray-300 border-b border-gray-300 ml-3 w-6"></div>
  )
}

export default function ViewIssue() {
  const { issueID } = useParams<RouteParams>()

  const [issue, setIssue] = useState<Model.Issue>()

  async function fetchIssue() {
    const {
      data: { getIssue: issue },
    } = (await API.graphql(graphqlOperation(getIssue, { id: issueID }))) as {
      data: Model.GetIssueQuery
    }

    sortCreatedAtOldest(issue?.comments?.items)
    setIssue(issue)
  }

  async function subscribeComments() {
    const observable = (await API.graphql(
      graphqlOperation(onCreateComment)
    )) as Observable<any>

    observable.subscribe(
      ({
        value: {
          data: { onCreateComment: comment },
        },
      }: {
        value: { data: { onCreateComment: Model.Comment } }
      }) => {
        if (comment.issueID === issueID) {
          setIssue((issue) => {
            const newIssue = {
              ...issue,
              comments: {
                ...issue.comments,
                items: [
                  ...issue.comments.items,
                  comment,
                ] as Array<Model.Comment>,
              },
            }
            sortCreatedAtOldest(newIssue?.comments?.items)

            return newIssue
          })
        }
      }
    )
  }

  async function subscribeUpdates() {
    const observable = (await API.graphql(
      graphqlOperation(onUpdateIssue)
    )) as Observable<any>

    observable.subscribe(
      ({
        value: {
          data: { onUpdateIssue: updatedIssue },
        },
      }: {
        value: { data: { onUpdateIssue: Model.Issue } }
      }) => {
        if (updatedIssue.id === issue?.id) {
          setIssue(updatedIssue)
        }
      }
    )
  }

  useEffect(() => {
    fetchIssue()
    subscribeComments()
    subscribeUpdates()
  }, [])

  return (
    <div className="p-2">
      {!issue ? (
        <div className="w-full flex items-center justify-center">
          <PacmanLoader color="rgb(26, 115, 232)" size={75} />
        </div>
      ) : (
        <>
          <main className="mt-6 container mx-auto flex flex-col justify-center align-center">
            <div className="flex flex-col lg:flex-row lg:justify-between mb-2 items-baseline">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <h1 className="text-2xl font-medium mr-4">{issue.title}</h1>
                <div className="my-2">
                  <IssueStatus issue={issue} />
                </div>
              </div>
              <h4 className="font-medium text-gray-400">
                Posted by {issue.owner}{" "}
                <ReactTimeago date={lastUpdated(issue)} />
              </h4>
            </div>

            <article className="border border-gray-300 rounded-md p-4">
              {issue.text}
            </article>

            <div className="flex justify-between">
              <VSpacer />
              <Link
                to={"/issue/" + issueID}
                className="pt-1 text-gray-400 text-xs text-right"
              >
                Issue {issueID}
              </Link>
            </div>

            {issue.comments?.items?.map((comment) => (
              <div key={comment.id}>
                <VSpacer />
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="ml-1">
                      <ProfilePic />
                    </div>
                    <VSpacer classes="flex-grow h-full" />
                  </div>

                  <div className="flex-grow ml-2">
                    <h3 className="font-medium flex-grow align-baseline">
                      {comment.owner} said:
                    </h3>
                    <p className="text-xs text-gray-400">
                      <ReactTimeago date={comment.createdAt} />
                    </p>
                    <p className="ml-2 mt-2">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}

            <VSpacer />
            <Ball />
            {/* <HSpacer /> */}
          </main>
          <CreateComment issue={issue} />
        </>
      )}
    </div>
  )
}
