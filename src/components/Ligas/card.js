import React from 'react'
import './Ligas.css'


function Card({title, imageSource , dat}) {
  return (

    <div className='cardprincipal'>

      <img src={imageSource} alt='' className='Timg'></img>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>{dat}</p>
        <button className='botn1'>Ir a la liga</button>
      </div>
    </div>
 
  )
}

export default Card