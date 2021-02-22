import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react"

import Amplify, { API, Auth, graphqlOperation, Hub } from "aws-amplify"
import config from "../aws-exports.js"
import React, { ReactNode, useEffect, useState } from "react"

import CognitoUser, { UserContext } from "../store/user"
import { CreateUserMutation, GetUserQuery, User } from "../API"
import { createUser } from "../graphql/mutations"
import { getUser } from "../graphql/queries"
import NavBar from "./NavBar"

import RingLoader from "react-spinners/RingLoader"

Amplify.configure({
  ...config,
  // ssr: true,
})

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  const [user, setUser] = useState<CognitoUser>()
  console.log("user", typeof user)

  const [loading, setLoading] = useState(true)

  async function getUserData() {
    const cognitoUser = await Auth.currentUserInfo()
    if (loading) {
      setLoading(false)
    }
    if (user && user.username === cognitoUser.username) {
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

      const updateUser = (newUser: User) =>
        setUser((curUser) => {
          if (newUser.id !== curUser?.username) {
            return {
              username: cognitoUser.username,
              attributes: cognitoUser.attributes,
            }
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
    <div className="bg-gray-50">
      <UserContext.Provider value={user}>
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
          {loading ? (
            <div className="h-screen flex items-center justify-center">
              <RingLoader color="rgb(26, 115, 232)" size={200} />
            </div>
          ) : (
            <div className="pt-16 bg-white w-full md:w-3/4 lg:w-3/5 mx-auto px-2">
              {user ? children : <h1>Please sign in to continue</h1>}
            </div>
          )}
        </AmplifyAuthenticator>
      </UserContext.Provider>
    </div>
  )
}
