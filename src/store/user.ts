import React from "react"

export interface UserAttributes {
  email: String
  name: String,
}


export default interface CognitoUser {
  username: String
  attributes?: UserAttributes
}

export const UserContext = React.createContext<CognitoUser>(null)