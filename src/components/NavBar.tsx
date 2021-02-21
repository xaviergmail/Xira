import { Auth } from "aws-amplify"
import React, { useContext } from "react"
import { UserContext } from "../store/user"

async function signOut() {
  await Auth.signOut()
}

function Spacer(props) {
  return (
    <div
      className="border-r border-gray-200 w-px self-stretch mx-4"
      {...props}
    ></div>
  )
}

export default function NavBar() {
  const user = useContext(UserContext)
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto flex items-baseline justify-between p-2">
        <a className="" href="/">
          <h1>XIRA</h1>
        </a>
        <div className="border-r border-gray-300 w-px mx-4 self-stretch my-4"></div>
        <a className="" href="/">
          <h1>Home</h1>
        </a>
        <Spacer />
        <p className="flex-grow font-bold bolder tests ok">
          Logged in as {user?.username}
        </p>
        <a
          href="/new-issue"
          className="text-white font-bold align-middle bg-green-600 p-2 mx-4 hover:bg-green-500 active:bg-green-600 rounded-md"
        >
          New Issue
        </a>

        <button
          className="bg-red-600 p-2 text-white rounded-md align-middle hover:bg-red-500 active:bg-red-700"
          onClick={signOut}
        >
          Sign Out
        </button>
      </nav>
    </header>
  )
}
