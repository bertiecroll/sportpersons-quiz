import React from 'react'
import { rules } from '../../data/rules'

class RulesBox extends React.Component {
  constructor(props) {
    super()
    this.state = {
      displayRules: false
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render() {
    const content = (this.state.displayRules) ?
      <p>{rules}</p> :
      null
    return (
      <div className="rules-box">
        <button onClick={this.handleButtonClick}>Rules</button>
        {content}
      </div>
    ) 
  }

  handleButtonClick() {
    this.setState({
      displayRules: !this.state.displayRules
    })
  }
}

export default RulesBox 