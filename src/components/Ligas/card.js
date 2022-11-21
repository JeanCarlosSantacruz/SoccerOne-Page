import React from 'react'
import './Ligas.css'


function Card({title, imageSource , dat}) {
  return (
    <div className='cartas'>
      <div className='cardprincipal'>
        <img src={imageSource} alt='' className='Timg'></img>
        <div>
          <h4 className='card-title'>{title}</h4>
          <p className='card-text text-secondary'>{dat}</p>
          <a className="ligasLinks" href='*'>Mas informacion</a> 
        </div>
      </div>
    </div>
  )
}

export default Card