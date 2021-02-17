import { AppProps } from "next/dist/next-server/lib/router/router"
import "../styles/globals.css"
// import "tailwindcss/tailwind.css"
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react"

import Amplify from "aws-amplify"
import config from "../src/aws-exports"
import React from "react"

Amplify.configure({
  ...config,
  ssr: true,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {Date.now().toString()}
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
        <div>
          <AmplifySignOut slot="sign-out" />
          <Component {...pageProps} />
        </div>
      </AmplifyAuthenticator>
    </div>
  )
}

export default MyApp
