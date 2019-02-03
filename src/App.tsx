import React from "react"

import { ConnectedRouter } from "connected-react-router"
import { Provider } from "react-redux"
import { Route, Switch } from "react-router-dom"

import {
  ErrorBoundary,
  Layout,
  MemberDetails,
  MembersList,
  NotFound
} from "./components"

import { configureStore, history } from "./config"
const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  </Provider>
)
