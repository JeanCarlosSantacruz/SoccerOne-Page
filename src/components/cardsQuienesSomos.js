import React from 'react';
import Card from './cardQuienesSomos';
import './QuienesSomos.css';
import   JeanCarlosS from './img/JeanCarlosS.JPG';
import AlejandroC from './img/alejandro.jpg';



const card = [
  {
    id: 1,
    title: 'Jean Carlos Santacruz',
    image: JeanCarlosS, 
    dat: 'Dev Principal.'

  },
  {
    id: 1,
    title: 'Alejandro Castañeda G',
    image: AlejandroC, 
    dat: 'Dev Principal.'

  }
]



function Cards() {

  return (
    <div className='contenedor1'>
      <div className='row1'>
        {
          card.map(card =>(
            <div className='Ord-card1' key={card.id}>
              <Card title = {card.title}  imageSource= {card.image}  dat= {card.dat}/>
            </div>
          ))
        }



      </div>
    </div>


  )
}

export default Cards