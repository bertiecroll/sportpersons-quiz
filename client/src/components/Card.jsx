import React from 'react'

const Card = function({styleName, card, index, topIndex, handleClick}) {

  const mvpImage = (index === topIndex) ?
    <img className="mvp-logo" src="/images/MVPlogo.png" /> :
    null

  console.log(styleName)
  return (
    <div className={styleName}>
      {mvpImage}
      <h4>{card.full_name}</h4>
      <img src={card.profile_picture_url} onClick={handleClick} value={index}/>
      <h4>{card.points}</h4>
    </div>
  )
}

export default Card