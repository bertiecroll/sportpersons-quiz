import React from 'react'

class End extends React.Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render() {
    const {user, result} = this.props

    const content = result ?
    <h4>Congratulations {user}! You Win!</h4> :
    <h4>Better luck next time {user}</h4>

    return (
      <div className="end-component">
        {content}
        <button onClick={this.handleButtonClick}>Try Again</button>
      </div>
    )
  }

  handleButtonClick() {

  }
}

export default End