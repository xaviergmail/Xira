import * as React from "react"

import { API, Auth, graphqlOperation } from "aws-amplify"
import { Formik, Form, Field, FormikHelpers, useFormikContext } from "formik"

import * as Model from "../API"
import { createComment, updateComment, updateIssue } from "../graphql/mutations"

type CommentFormData = Partial<Model.Comment>

function getInitialValues(): CommentFormData {
  return {
    text: "",
  }
}

type CreateCommentProps = {
  issue: Model.Issue
}

type CreateCommentComponentProps = {
  issue: Model.Issue
  disabled: boolean
}

function CreateCommentComponent({
  issue,
  disabled,
}: CreateCommentComponentProps) {
  const { values, submitForm } = useFormikContext<CommentFormData>()

  const [modifying, setModifying] = React.useState(false)

  async function updateStatus(status) {
    await API.graphql(
      graphqlOperation(updateIssue, { input: { id: issue.id, status } })
    )
  }

  async function closeIssue() {
    setModifying(true)
    if (values.text) {
      submitForm()
    }
    await updateStatus("closed")
    setModifying(false)
  }

  async function openIssue() {
    setModifying(true)
    if (values.text) {
      submitForm()
    }
    await updateStatus("open")
    setModifying(false)
  }

  disabled = disabled || modifying

  return (
    <Form className="flex flex-col ml-5 mt-4 max-w-prose mx-auto">
      <label className="flex flex-col">
        <p className="text-xl">Post a comment:</p>

        <Field
          component="textarea"
          name="text"
          rows={5}
          disabled={disabled}
          className="border border-gray-400 rounded p-2"
        ></Field>
      </label>

      <div className="flex flex-row-reverse mt-4">
        <div className="flex">
          {issue.status !== "closed" ? (
            <button
              type="submit"
              onClick={closeIssue}
              disabled={disabled}
              className="px-4 py-2 rounded-lg border border-yellow-600 align-middle hover:bg-yellow-50 active:bg-yellow-100 disabled:border-gray-400 disabled:bg-gray-100 disabled:cursor-default"
            >
              {values?.text ? "Comment and Close" : "Close Issue"}
            </button>
          ) : (
            <button
              type="submit"
              onClick={openIssue}
              disabled={disabled}
              className="px-4 py-2 rounded-lg border border-green-500 align-middle hover:bg-green-50 active:bg-green-100 disabled:border-gray-400 disabled:bg-gray-100 disabled:cursor-default"
            >
              {values?.text ? "Comment and Reopen" : "Reopen Issue"}
            </button>
          )}

          <button
            type="submit"
            disabled={disabled}
            className="px-4 py-2 rounded-lg border border-blue-600 align-middle ml-4 hover:bg-blue-50 active:bg-blue-100 disabled:border-gray-400 disabled:bg-gray-100 disabled:cursor-default"
          >
            Comment
          </button>
        </div>
      </div>
    </Form>
  )
}

export default function CreateComment({ issue }: CreateCommentProps) {
  const issueID = issue.id

  const [disabled, setDisabled] = React.useState(false)

  async function runCreateComment(values, actions) {
    if (values.text) {
      setDisabled(true)
      try {
        const comment = await API.graphql(
          graphqlOperation(createComment, { input: { ...values, issueID } })
        )
      } catch (err) {
        console.error(err)
      } finally {
        setDisabled(false)
      }
      actions.resetForm({ values: getInitialValues() })
    }
  }

  return (
    <Formik
      initialValues={getInitialValues()}
      onSubmit={(...args) => {
        if (!disabled) {
          runCreateComment(...args)
        }
      }}
    >
      <CreateCommentComponent issue={issue} disabled={disabled} />
    </Formik>
  )
}
