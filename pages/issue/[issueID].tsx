import { API, graphqlOperation } from "aws-amplify"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getIssue } from "../../src/graphql/queries"

import CreateComment from "../../components/CreateComment"

import * as Model from "../../src/API"

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

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <div>
      Issue ID {issueID}{" "}
      {!issue ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <h1>{issue.title}</h1>
            <h4>
              Posted by {issue.owner} at {issue.createdAt}
            </h4>
            <article>{issue.text}</article>
            {issue.comments?.items?.map((comment) => (
              <div>
                <h5>
                  {comment.creator} said at {comment.createdAt}
                </h5>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
          <CreateComment issueID={issueID as String} />
        </>
      )}
    </div>
  )
}
