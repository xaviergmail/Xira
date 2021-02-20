import { AppProps } from "next/dist/next-server/lib/router/router"

import React from "react"

import "../styles/tw-before.css"
import "../styles/application.css"
import "../styles/tw-after.css"

import Layout from "./components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50">
      <div>Hi there ok lol but whatthe fuck</div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
