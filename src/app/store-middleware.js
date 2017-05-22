import {createLogger} from "redux-logger"
import {applyMiddleware} from "redux"
import {routerMiddleware} from "react-router-redux"

export default function getStoreMiddleware(history) {
  return applyMiddleware(
    createLogger({collapsed: true}),
    routerMiddleware(history)
  )
}
