import React from 'react'

const MessageBox = function({user, chosenCard, round}) {

  const content = (chosenCard) ?
  <h4>Your Selection: {chosenCard.full_name}</h4> :
  <h4> </h4>

  return (
    <div className="message-box">
      <h2>Player: {user}</h2>
      <h2>Round: {round}</h2>
      {content}
    </div>
  )
}

export default MessageBox