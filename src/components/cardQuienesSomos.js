import React from 'react'
import './QuienesSomos.css'


function CardQuienesSomos({titleQuienesSomos, imageSourceQuienesSomos , datQuienesSomos}) {
  return (

    <div className='cardQuienesSomossss'>

      <img src={imageSourceQuienesSomos} alt='' className='TimgQuienesSomossss'></img>
      <div className='card-bodyQuienesSomossss'>
        <h4 className='card-titleQuienesSomossss'>{titleQuienesSomos}</h4>
        <p className='card-text text-secondaryQuienesSomossss'>{datQuienesSomos}</p>
     
      </div>
    </div>
  )
}

export default CardQuienesSomos;