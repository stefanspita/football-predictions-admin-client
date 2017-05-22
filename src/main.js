import "./main.css"
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {Router, Route} from "react-router"
import {createStore, combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
import createHistory from "history/createBrowserHistory"
import R from "ramda"
import App, {reducers} from "./app"
import getStoreMiddleware from "./store-middleware"

const history = createHistory()
const store = createStore(
  combineReducers(R.merge(reducers, {router: routerReducer})),
  getStoreMiddleware(history)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById("app-container")
)
