import React from 'react'
import './Ver+.css'

function CardVerMas({title, info}) {
  return (
    <div className='cardPrinVer'>
      <div>
        <h4 className='tittleVerMas'>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default CardVerMas