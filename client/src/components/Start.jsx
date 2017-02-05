import React from 'react'

import RoundsToggle from './RoundsToggle'

class Start extends React.Component {
  constructor(props) {
    super()
    this.state = {
      userName: "",
      totalRounds: 3
    }
    this.updateUserName = this.updateUserName.bind(this)
    this.updateTotalRounds = this.updateTotalRounds.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
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
        <button onClick={this.handleOnClick}>Start Game</button>
      </div>
    )
  }

  updateUserName(event) {
    this.setState({
      userName: event.target.value
    })
  }

  updateTotalRounds(value) {
    const newTotal = this.state.totalRounds + value
    if (newTotal > 0 && newTotal < 6)
    this.setState({
      totalRounds: newTotal 
    })
  }

  handleOnClick() {
    const {userName, totalRounds} = this.state
    this.props.setUserPrefs(userName, totalRounds)
  }
}

export default Start