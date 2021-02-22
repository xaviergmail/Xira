import React, { useState } from "react"

import { API, Auth, graphqlOperation } from "aws-amplify"
import { Formik, Form, Field, FormikHelpers } from "formik"

import * as Model from "../API"

import { createIssue } from "../graphql/mutations"
import { useHistory } from "react-router-dom"

type IssueFormData = Partial<Model.Issue>

function getInitialValues(): IssueFormData {
  return {
    title: "",
    text: "",
  }
}

export default function CreateIssue() {
  const [disabled, setDisabled] = useState(false)

  const history = useHistory()

  function back() {
    history.goBack()
  }

  async function runCreateIssue(
    values: IssueFormData,
    actions: FormikHelpers<IssueFormData>
  ) {
    setDisabled(true)

    try {
      const cognitoUser = await Auth.currentUserInfo()
      if (cognitoUser) {
        const issue = (await API.graphql(
          graphqlOperation(createIssue, {
            input: { ...values },
          })
        )) as { data: Model.CreateIssueMutation }

        history.replace("/issue/" + issue.data.createIssue.id)

        actions.resetForm({ values: getInitialValues() })
      }
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <div className="p-2">
      <h1 className="border-b border-gray-300">New Issue</h1>
      <Formik
        initialValues={getInitialValues()}
        onSubmit={async (values, actions) => {
          runCreateIssue(values, actions)
        }}
      >
        <Form className="flex flex-col">
          <label className="mt-4 flex flex-col">
            <p className="text-xl">Title</p>
            <Field
              name="title"
              className="border border-gray-400 rounded max-w-prose p-2"
            />
          </label>

          <label className="mt-4 flex flex-col">
            <p className="text-xl">Description</p>
            <Field
              component="textarea"
              name="text"
              rows={20}
              className="border border-gray-400 rounded p-2"
            />
          </label>

          <div className="flex row justify-end">
            <button
              disabled={disabled}
              className="self-end mt-4 px-4 py-2 rounded-lg border border-red-500 align-middle mr-4 hover:bg-red-50 active:bg-red-100 disabled:border-gray-400 disabled:bg-gray-100 disabled:cursor-default"
              onClick={back}
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={disabled}
              className="self-end mt-4 px-4 py-2 rounded-lg border border-green-500 align-middle hover:bg-green-50 active:bg-green-100 disabled:border-gray-400 disabled:bg-gray-100 disabled:cursor-default"
            >
              Create Issue
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
