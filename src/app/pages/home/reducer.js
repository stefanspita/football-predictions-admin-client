import R from "ramda"
import consts from "../../../constants"

const initialState = {
  buttonClicked: false,
}

export default function click(state = initialState, action) {
  switch (action.type) {
  case consts.CLICK_BUTTON:
    return R.merge(
      state,
      {buttonClicked: true}
    )
  default:
    return state
  }
}
