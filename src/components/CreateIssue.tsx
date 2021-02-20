import * as React from "react"

import { API, Auth, graphqlOperation } from "aws-amplify"
import { Formik, Form, Field, FormikHelpers } from "formik"

import * as Model from "../API"

import { createIssue } from "../graphql/mutations"

type IssueFormData = Partial<Model.Issue>

function getInitialValues(): IssueFormData {
  return {
    title: "",
    text: "",
  }
}

export default function CreateIssue() {
  async function runCreateIssue(
    values: IssueFormData,
    actions: FormikHelpers<IssueFormData>
  ) {
    const cognitoUser = await Auth.currentUserInfo()
    if (cognitoUser) {
      const issue = (await API.graphql(
        graphqlOperation(createIssue, {
          input: { ...values },
        })
      )) as { data: Model.CreateIssueMutation }

      actions.resetForm({ values: getInitialValues() })
    }
  }

  return (
    <div>
      <h1>New Issue</h1>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={async (values, actions) => {
          runCreateIssue(values, actions)
        }}
      >
        <Form>
          <label className="flex flex-col">
            <p>Title</p> <Field name="title" />
          </label>

          <label className="flex flex-col">
            <p>Description</p>
            <Field component="textarea" name="text" />
          </label>

          <button type="submit">Create Issue</button>
        </Form>
      </Formik>
    </div>
  )
}
