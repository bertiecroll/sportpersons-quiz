import React from 'react'

const MessageBox = function({user, chosenCard, round}) {

  const content = (chosenCard) ?
  <h3 className="selected-choice">Your Selection: <strong>{chosenCard.full_name}</strong></h3> :
  <h3> </h3>

  return (
    <div className="message-box">
      <h2 className="user-name">Player: <strong>{user}</strong></h2>
      <h2>Round: <strong>{round}</strong></h2>
      {content}
    </div>
  )
}

export default MessageBox