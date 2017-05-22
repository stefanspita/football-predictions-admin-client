import React from "react"
import PropTypes from "prop-types"

const Home = ({buttonClicked, onButtonClick}) => {
  const buttonState = buttonClicked ? "clicked" : "not clicked"
  return (
    <div>
      The button is {buttonState}
      <br />
      <button onClick={() => onButtonClick("button-id")}>
        The button</button>
    </div>
  )
}

Home.propTypes = {
  buttonClicked: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Home
