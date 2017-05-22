import R from "ramda"
import {reducers as homeReducers} from "./pages/home"
import App from "./pages/home"

export const reducers = R.merge(homeReducers, {})

export default App
