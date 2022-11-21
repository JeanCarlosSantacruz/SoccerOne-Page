import React from 'react';
import CardVerMas from './CardVerMas';

const cards = [
  {
    id: 1,
    title: 'Vision',
    info: 'Para el 2025 planeamos ser patrocinadores oficiales de la liga Colombiana de futbol.'

  },
  {
    id: 2,
    title: 'Mision',
    info: 'Informar sobre las estadisticas y datos de cada club a nivel mundial.'
  },
  {
  id: 3,
  title: 'Valores',
  info: 'Nuestros principales valores son: cortesia, integridad y perseverancia'
},
]

function CardsVerMas() {

  return (
    <div className='contenedorVerMas'>
        {
          cards.map(card =>(
            <div key={card.id}>
              <CardVerMas title = {card.title}  info= {card.info}/>
            </div>
          ))
        }
      </div>
  )
}

export default CardsVerMas