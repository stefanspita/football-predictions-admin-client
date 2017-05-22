import React, {PropTypes} from "react"
import R from "ramda"
import {reducers as homeReducers} from "./pages/home"
import Homepage from "./pages/home"
import {Router, Route, hashHistory} from "react-router"
import {syncHistoryWithStore} from "react-router-redux"

function App({store}) {
  const history = syncHistoryWithStore(hashHistory, store)
  return (
    <Router history={history}>
      <Route path="/" component={Homepage}/>
    </Router>
  )
}

export const reducers = R.merge(homeReducers, {})

App.propTypes = {
  store: PropTypes.object.isRequired,
}

export default App
