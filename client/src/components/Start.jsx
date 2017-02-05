import React from 'react'

import RoundsToggle from './RoundsToggle'
import ErrorBox from './ErrorBox'

class Start extends React.Component {
  constructor(props) {
    super()
    this.state = {
      userName: "",
      totalRounds: 3,
      displayError: false
    }
    this.updateUserName = this.updateUserName.bind(this)
    this.updateTotalRounds = this.updateTotalRounds.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render() {
    return (
      <div className="start-component">
        <h2>Welcome</h2>
        <input type="text" onChange={this.updateUserName} />
        <RoundsToggle 
          updateTotalRounds={this.updateTotalRounds}
          totalRounds={this.state.totalRounds}
        />
        <button onClick={this.handleButtonClick}>Start Game</button>
        <ErrorBox
          show={this.state.displayError}
          message="Please enter name"
        />
      </div>
    )
  }

  updateUserName(event) {
    this.setState({
      userName: event.target.value,
      displayError: false
    })
  }

  updateTotalRounds(value) {
    const newTotal = this.state.totalRounds + value
    if (newTotal > 0 && newTotal < 6)
    this.setState({
      totalRounds: newTotal 
    })
  }

  handleButtonClick() {
    const {userName, totalRounds} = this.state
    if (userName) {
      this.props.setUserPrefs(userName, totalRounds)
    } else {
      this.setState({
        displayError: true
      })
    }
  }
}

export default Start