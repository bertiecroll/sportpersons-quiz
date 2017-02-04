import React from 'react'

const Card = function({image, name}) {
  return (
    <div className="card">
        <img src={image} />
        <h4>{name}</h4>
    </div>
  )
}

export default Card