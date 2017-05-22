import "./main.css"
import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore, combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
import R from "ramda"
import {reducers} from "./app"
import App from "./app"
import getStoreMiddleware from "./app/store-middleware"

const store = createStore(
  combineReducers(R.merge(reducers, {routing: routerReducer})),
  getStoreMiddleware()
)

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("app-container")
)
