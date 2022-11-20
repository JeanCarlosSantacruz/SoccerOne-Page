import React from 'react'
import Card from './cardTorneos'
import './Torneos.css'
import   championsleage from './img/championsleage.png'
import conferenceleage from './img/conferenceleage.png'
import europaleage from './img/europaleage.png'

const card = [
  {
    id: 1,
    title: 'Champions league',
    image: championsleage, 
    dat: 'La Liga de Campeones de la UEFA, también conocida como Copa de Europa, es el torneo internacional oficial de fútbol más prestigioso a nivel de clubes en Europa..'

  },

  {
    id: 2,
    title: 'Europa league',
    image: europaleage,
    dat: 'La Liga Europa de la UEFA, conocida en sus orígenes como Copa de la UEFA, es una competición continental de clubes organizada por la Unión de Asociaciones Europeas de Fútbol.'

  },
  {
    id: 3,
    title: 'Conference league',
    image: conferenceleage,
    dat: 'La Liga Europa Conferencia de la UEFA, también conocida simplemente como Liga Conferencia, es una competición continental oficial de clubes organizada por la Unión de Federaciones Europeas de Fútbol, considerada la tercera competición continental, tras la Liga de Campeones y la Liga Europa.'

  }
]

function Cards() {
  return (
    <div className='contenedorligas'>
        {
          card.map(card =>(
            <div className='Ord-card' key={card.id}>
                <Card title = {card.title}  imageSource= {card.image}  dat= {card.dat}/>
              </div>
          ))
        }
      </div>
  )
}

export default Cards