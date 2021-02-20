import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react"

import Amplify, { API, Auth, graphqlOperation, Hub } from "aws-amplify"
import config from "../src/aws-exports.js"
import React, { ReactNode, useEffect, useState } from "react"

import User, { UserInfo } from "../src/store/user"
import { CreateUserMutation, GetUserQuery } from "../src/API"
import { createUser } from "../src/graphql/mutations"
import { getUser } from "../src/graphql/queries"
import NavBar from "./NavBar"

Amplify.configure({
  ...config,
  // ssr: true,
})

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [user, setUser] = useState<User>()

  async function getUserData() {
    const cognitoUser = await Auth.currentUserInfo()
    if (user && user.username == cognitoUser.username) {
      return
    }

    console.log("Cognito user", cognitoUser)
    if (cognitoUser) {
      const userData = (await API.graphql(
        graphqlOperation(getUser, {
          id: cognitoUser.username,
        })
      )) as {
        data: GetUserQuery
      }

      const updateUser = (newUser: UserInfo) =>
        setUser((curUser) => {
          if (newUser.id != curUser?.username) {
            return { username: newUser.id }
          }

          return curUser
        })

      const result = userData?.data?.getUser
      if (result) {
        updateUser(result)
        console.log("Got user from DB", result)
      } else {
        const newUser = (await API.graphql(
          graphqlOperation(createUser, {
            input: {
              id: cognitoUser.username,
              email: cognitoUser.attributes.email,
            },
          })
        )) as { data: CreateUserMutation }
        console.log("Made user in DB", newUser)

        if (newUser?.data?.createUser) {
          updateUser(newUser.data.createUser)
        }
      }
    }
  }

  async function getUserDataSafe() {
    try {
      await getUserData()
    } catch (e) {
      console.error("Exception happened when getting user data", e)
    }
  }
  useEffect(() => {
    Hub.listen("auth", (data) => {
      const { payload } = data
      if (payload.event === "signIn") {
        getUserDataSafe()
      }
      if (payload.event === "signOut") {
        setUser(null)
      }
    })

    getUserDataSafe()
  })

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="username"
        formFields={[
          {
            type: "username",
            required: true,
          },
          {
            type: "name",
            placeholder: "Enter your first and last name",
            label: "Name *",
            required: true,
          },
          {
            type: "email",
            required: true,
          },
          {
            type: "password",
            required: true,
          },
        ]}
      />
      <AmplifySignIn slot="sign-in" />
      <NavBar />
      {user ? children : <h1>Loading user...</h1>}
    </AmplifyAuthenticator>
  )
}
