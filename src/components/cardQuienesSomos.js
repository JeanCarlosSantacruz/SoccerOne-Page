import React from 'react'
import './QuienesSomos.css'


function Card({title, imageSource , dat}) {
  return (

    <div className='cardprincipal1'>

      <img src={imageSource} alt='' className='Timg1'></img>
      <div className='card-body1'>
        <h4 className='card-title1'>{title}</h4>
        <p className='card-text text-secondary1'>{dat}</p>
        <a className="ligasLinks1" href='/Ligas'>Mas informacion</a> 
      </div>
    </div>
  )
}

export default Card