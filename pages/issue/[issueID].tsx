import { API, graphqlOperation } from "aws-amplify"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getIssue } from "../../src/graphql/queries"
import Observable from "zen-observable-ts"

import CreateComment from "../../components/CreateComment"

import * as Model from "../../src/API"
import { onCreateComment } from "../../src/graphql/subscriptions"

export default function ViewIssue() {
  const router = useRouter()
  const { issueID } = router.query

  const [issue, setIssue] = useState<Model.Issue>()

  async function fetchIssues() {
    const {
      data: { getIssue: issue },
    } = (await API.graphql(graphqlOperation(getIssue, { id: issueID }))) as {
      data: Model.GetIssueQuery
    }

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
          setIssue((issue) => ({
            ...issue,
            comments: {
              ...issue.comments,
              items: [...issue.comments.items, comment],
            },
          }))
        }
      }
    )
  }

  useEffect(() => {
    fetchIssues()
    subscribeComments()
  }, [])

  return (
    <div>
      Issue ID {issueID}{" "}
      {!issue ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <main className="container mx-auto flex flex-col justify-center align-center">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h1 className="text-xl font-bold">{issue.title}</h1>
              <h4 className="font-semibold text-gray-500">
                Posted by {issue.owner} at {issue.createdAt}
              </h4>
            </div>

            <article className="border border-gray-100 bg-white shadow-lg rounded-xl p-4">
              {issue.text}
            </article>
            {issue.comments?.items?.map((comment) => (
              <div>
                <h5>
                  {comment.owner} said at {comment.createdAt}
                </h5>
                <p>{comment.text}</p>
              </div>
            ))}
          </main>
          <CreateComment issueID={issueID as String} />
        </>
      )}
    </div>
  )
}
