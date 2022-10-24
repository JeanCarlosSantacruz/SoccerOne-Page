import React from 'react'
import CardQuienesSomos from './cardQuienesSomos';
import './QuienesSomos.css'
import   alejandro from './img/alejandro.jpg'
import   jeancarlos from './img/alejandro.jpg'




const cardQuienesSomos = [
  {
    id: 1,
    titleQuienesSomos: 'Jean Carlos Santacruz',
    imageQuienesSomos: jeancarlos,
    datQuienesSomos: 'datos.'

  },
  {
    id: 2,
    titleQuienesSomos: 'Alejandro Castañeda Gualguan',
    imageQuienesSomos: alejandro,
    datQuienesSomos: 'datos.'

  }


]



function CardsQuienesSomos() {

  return (
    <div className='contenedorQuienesSomos'>
      <div className='rowQuienesSomos'>
        {
          CardQuienesSomos.map(CardQuienesSomos =>(
            <div className='Ord-card' key={CardQuienesSomos.id}>
              <CardQuienesSomos title = {CardQuienesSomos.title}  imageSource= {CardQuienesSomos.image}  dat= {CardQuienesSomos.dat}/>
            </div>
          ))
        }



      </div>
    </div>


  )
}

export default CardsQuienesSomos;