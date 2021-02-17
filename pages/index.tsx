import Head from "next/head"
import { useContext } from "react"
import { UserContext } from "../src/store/user"

export default function Home() {
  const { loggedIn } = useContext(UserContext)

  return (
    <div className="container">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Welcome to Xira!</p>
      </main>
    </div>
  )
}
