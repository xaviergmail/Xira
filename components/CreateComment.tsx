import * as React from "react"

import { API, Auth, graphqlOperation } from "aws-amplify"
import { Formik, Form, Field, FormikHelpers } from "formik"

import * as Model from "../src/API"
import { createComment } from "../src/graphql/mutations"

type CommentFormData = Partial<Model.Comment>

function getInitialValues(): CommentFormData {
  return {
    text: "",
  }
}

export type CreateCommentProps = {
  issueID: String
}

export default function CreateComment({ issueID }: CreateCommentProps) {
  async function runCreateComment(values, actions) {
    const lol = { input: { ...values, issueID } }
    console.log(lol)
    const comment = await API.graphql(graphqlOperation(createComment, lol))
    actions.resetForm({ values: getInitialValues() })
  }

  return (
    <Formik initialValues={getInitialValues()} onSubmit={runCreateComment}>
      <Form>
        <label>
          <h5>Post a comment:</h5>

          <Field component="textarea" name="text"></Field>
        </label>
        <button type="submit">Post Comment</button>
      </Form>
    </Formik>
  )
}
