import consts from "../../../constants"

function onButtonClick(payload) {
  return {
    type: consts.CLICK_BUTTON,
    payload,
  }
}

export default function actions(dispatch) {
  return {
    onButtonClick: (id) => {
      dispatch(onButtonClick(id))
    },
  }
}
