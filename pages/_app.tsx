import { AppProps } from "next/dist/next-server/lib/router/router"
import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import { withAuthenticator } from "@aws-amplify/ui-react"

import Amplify from "aws-amplify"
import config from "../src/aws-exports"
Amplify.configure({
  ...config,
  ssr: true,
})

function MyApp({ Component, pageProps }: AppProps) {
  const AuthenticatedComponent = withAuthenticator(Component)
  return <AuthenticatedComponent {...pageProps} />
}

export default MyApp
