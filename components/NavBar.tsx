import { AmplifySignOut } from "@aws-amplify/ui-react"
import React, { useContext } from "react"
import { UserContext } from "../src/store/user"

export default function NavBar() {
  const user = useContext(UserContext)
  return (
    <header>
      <nav className="flex bg-white border-b border-gray-300 items-center justify-between">
        <a className="border-r border-gray-700">Home</a>
        <p className="flex-grow text-ltext-lg g font-bold bolder tests">
          Welcome, {user?.attributes?.name}
        </p>
        <a
          className="block text-lg text-white bg-green-600 font-bold align-middle h-100 px-4 py-1 m-4 hover:bg-green-400 active:bg-green-500 rounded-xl shadow-lg"
          href="/create-issue"
        >
          New Issue
        </a>
        <AmplifySignOut />
      </nav>
    </header>
  )
}
