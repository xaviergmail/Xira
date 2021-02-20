import { AppProps } from "next/dist/next-server/lib/router/router"

import React from "react"

import Layout from "../components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
