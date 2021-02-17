import React from "react"
export default class User {
    loggedIn: Boolean = false
    name: String = "Unknown user"
}

export const UserContext = React.createContext<User>(new User())