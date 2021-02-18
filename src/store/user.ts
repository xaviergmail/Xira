import React from "react"

export interface UserAttributes {
  email: String
  name: String,
}

export interface UserInfo {
  __typename: String
  id: String
}

export default interface User {
  username: String
  attributes?: UserAttributes
}

export const UserContext = React.createContext<User>(null)