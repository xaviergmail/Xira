import { faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Auth } from "aws-amplify"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
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
    <header className="fixed left-0 right-0 top-0 bg-white border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between p-2">
        <a className="" href="/">
          <h1>XIRA</h1>
        </a>
        <div className="hidden md:block text-gray-300 mx-2">{"//"}</div>
        <a className="hidden md:block" href="/">
          <h1>Home</h1>
        </a>
        <Spacer />
        <p className="flex-grow">Hello, {user?.username}!</p>
        <Link
          to="/new-issue"
          className="text-white font-semibold align-middle bg-green-600 py-2 px-4 mx-4 hover:bg-green-500 active:bg-green-600 rounded-md"
        >
          <span className="hidden md:inline mr-2">New Issue</span>
          <FontAwesomeIcon className="inline" icon={faPlus} />
        </Link>

        <button
          className="bg-red-600 py-2 px-4 text-white rounded-md align-middle hover:bg-red-500 active:bg-red-700"
          onClick={signOut}
        >
          <span className="hidden md:inline mr-2">Sign Out</span>
          <FontAwesomeIcon className="inline" icon={faSignOutAlt} />
        </button>
      </nav>
    </header>
  )
}
