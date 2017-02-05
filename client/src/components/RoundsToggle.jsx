import React from 'react'

class RoundsToggle extends React.Component {
  constructor(props) {
    super()
    this.handleIncreaseClick = this.handleIncreaseClick.bind(this)
    this.handleDecreaseClick = this.handleDecreaseClick.bind(this)
  }

  render() {
    return (
      <div className="rounds-toggle">
        <h3>Select Number of Rounds: </h3>
        <h2>{this.props.totalRounds}</h2>
        <button onClick={this.handleDecreaseClick} className="decrease-button">-</button>
        <button onClick={this.handleIncreaseClick} className="increase-button">+</button>
      </div>
    )
  }

  handleIncreaseClick() {
    this.props.updateTotalRounds(1)  
  }

  handleDecreaseClick() {
    this.props.updateTotalRounds(-1)
  }
}

export default RoundsToggle