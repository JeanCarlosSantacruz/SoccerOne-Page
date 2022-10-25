import React from 'react'
import './QuienesSomos.css'


function Card({title, imageSource, face , ig , git ,dat}) {
  return (

    <div className='cardprincipal1'>

      <img src={imageSource} alt='' className='Timg1'></img>
      <div className='card-body1'>
        <h4 className='card-title1'>{title}</h4>
        <p className='card-text text-secondary1'>{dat}</p>
        <div className='icons'>
          <a   href={face}  className='socialMedia'>
            <i class="fa-brands fa-facebook-f" ></i>
          </a>
          <a href={ig} className='socialMedia'>
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href={git} className='socialMedia'>
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
        <br></br>
        <a className="ligasLinks1" href='*'>Mas informacion</a> 
      </div>
    </div>
  )
}

export default Card