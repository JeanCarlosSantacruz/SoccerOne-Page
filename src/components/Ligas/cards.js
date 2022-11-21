import React from 'react'
import Card from './card';
import './Ligas.css'
import   premierleage from './img/Premier-League-Logo.png'
import laliga from './img/laliga.png'
import bundes from './img/bundes.png'
import Premier from '../premierleage/premier';
import { useNavigate } from 'react-router-dom';



const card = [
  
  
  {
    id: 1,
    title: 'Premier leage',
    image: premierleage, 
    dat: 'La Premier League, también conocida en Inglaterra como The Premiership, es la máxima categoría del sistema de ligas de fútbol de Inglaterra.',
    
    linkdat: 'textolink'
  },

  {
    id: 2,
    title: 'La liga',
    image: laliga,
    dat: 'La Primera División de España o LaLiga, conocida como LaLiga Santander por motivos de patrocinio, ​​y cuyo nombre oficial es Campeonato Nacional de Liga de Primera División'

  },
  {
    id: 3,
    title: 'Bundesliga',
    image: bundes,
    dat: 'La Bundesliga es la competición entre los equipos de fútbol de la máxima categoría de Alemania. Se empezó a disputar en 1963,'

  }
]

function Cards() {
  return (
    <div className='contenedorligas'>
        {
          card.map(card =>(
            <div className='Ord-card' key={card.id}>
                <Card title = {card.title}  imageSource= {card.image}  dat= {card.dat} linkdat = {card.linkdat}/>
              </div>
          ))
        }
      </div>
  )
}

export default Cards