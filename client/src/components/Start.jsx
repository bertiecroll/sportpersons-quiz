import React from 'react'

class Start extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      totalRounds: 3
    }
    this.updateUserName = this.updateUserName.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  render() {

    return (
      <div className="start-component">
        <h2>Welcome</h2>
        <input type="text" onChange={this.updateUserName} />
        <button onClick={this.handleOnClick}>Start Game</button>
      </div>
    )
  }

  updateUserName(event) {
    this.setState({
      userName: event.target.value
    })
  }

  updateTotalRounds(rounds) {
    this.setState({
      totalRounds: rounds 
    })
  }

  handleOnClick() {
    const {userName, totalRounds} = this.state
    this.props.setUserPrefs(userName, totalRounds)
  }
}

export default Start