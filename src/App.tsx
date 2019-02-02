import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import {
  ErrorBoundary,
  Layout,
  MemberDetails,
  MembersList,
  NotFound
} from "./components"

import { configureStore } from "./config"
const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <ErrorBoundary>
          <Switch>
            <Route exact={true} path="/" component={MembersList} />
            <Route path="/list" component={MembersList} />
            <Route path="/members/:memberId" component={MemberDetails} />
            <Route component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </Layout>
    </Router>
  </Provider>
)
