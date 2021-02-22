import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./styles/tw-before.css"
import "./styles/application.css"
import "./styles/tw-after.css"

import Layout from "./components/Layout"
import Home from "./pages/HomePage"
import CreateIssuePage from "./pages/CreateIssuePage"
import ViewIssuePage from "./pages/ViewIssuePage"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/issue/:issueID">
            <ViewIssuePage />
          </Route>
          <Route path="/new-issue">
            <CreateIssuePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="">
            <div>Page not found</div>
          </Route>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
