import React from 'react'

import RoundsToggle from './RoundsToggle'
import ErrorBox from './ErrorBox'
import RulesBox from './RulesBox'

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
        <h1>Sportpersons Quiz</h1>
        <ErrorBox
          show={this.state.displayError}
          message="*please enter name*"
        />
        <h3>What is your name?</h3>
        <input type="text" placeholder="Enter Name" onChange={this.updateUserName} />
        
        <RoundsToggle 
          updateTotalRounds={this.updateTotalRounds}
          totalRounds={this.state.totalRounds}
        />
        <div className="start-buttons">
          <button onClick={this.handleButtonClick}>Start Game</button>
          <RulesBox />
        </div>
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