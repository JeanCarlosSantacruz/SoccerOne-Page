import React from 'react'
import './Ligas.css'


function Card({title, imageSource , dat}) {
  return (

    <div className='card text-center'>

      <img src={imageSource} alt='' className='Timg'></img>
      <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>{dat}</p>
        <a href='' className='btn btn-outline-secondary'>ir a la liga</a>
      </div>
    </div>
 
  )
}

export default Card