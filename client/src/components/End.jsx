import React from 'react'

const End = function({result, user}) {

  const content = result ?
  <h4>Congratulations {user}! You Win!</h4> :
  <h4>Better luck next time {user}</h4>

  return (
    <div className="end-component">
      {content}
    </div>
  )
}

export default End