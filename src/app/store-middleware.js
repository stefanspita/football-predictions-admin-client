import createLogger from "redux-logger"
import {applyMiddleware} from "redux"

export default function getStoreMiddleware() {
  return applyMiddleware(
    createLogger({collapsed: true})
  )
}
