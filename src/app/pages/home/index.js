import reducer from "./reducer"
import { connect } from "react-redux"
import actions from "./actions"
import Home from "./components/home"

const selector = (state) => {
  return {
    buttonClicked: state.home.buttonClicked,
  }
}

const VisibleTodoList = connect(
  selector,
  actions
)(Home)

export default VisibleTodoList

export const reducers = {
  home: reducer,
}
