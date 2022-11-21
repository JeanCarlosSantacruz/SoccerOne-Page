import React from 'react'
import './Ligas.css'



function Card({title, imageSource , dat, linkdat}) {
  return (
    <div className='cartasli'>
      <div className='cardprincipalli'>

        <img src={imageSource} alt='' className='Timgli'></img>
        <div className='card-body'>
          <h4 className='card-title'>{title}</h4>
          <p className='card-text text-secondary'>{dat}</p>
          
        </div>
        <br></br>
        <a className="ligasLinks" href={linkdat}>Mas informacion</a> 
      </div>

    </div>
  )
}

export default Card