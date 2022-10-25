import React from 'react';
import Card from './cardQuienesSomos';
import './QuienesSomos.css';
import JeanCarlosS from '../img/JeanCarlosS.JPG';
import AlejandroC from '../img/alejandro.jpg';
import costeño from '../img/costeño.jpg';

const card = [
  {
    id: 1,
    title: 'Jean Carlos Santacruz',
    image: JeanCarlosS, 
    dat: 'Dev front-end y back-end.',
    facebook: 'https://www.facebook.com/profile.php?id=100009248906573',
    ig: 'https://www.instagram.com/santacruzj24/?hl=fr',
    git:'https://github.com/JeanCarlosSantacruz'


  },
  {
    id: 2,
    title: 'Alejandro Castañeda G',
    image: AlejandroC, 
    dat: 'Dev back-end.',
    facebook: 'https://www.facebook.com/alejandro.castaneda.758737/',
    ig: 'https://www.instagram.com/gualguanosky/?hl=fr',
    git: 'https://github.com/Gualguanosky'

  },
  {
  id: 3,
  title: 'Edinson Pedroza',
  image: costeño, 
  dat: 'El Dev Carriado.',
  facebook: 'https://www.facebook.com/edinson.pedroza.750',
  ig: 'https://www.instagram.com/insones_t/?hl=fr',
  git: 'https://github.com'

},
]

function Cards() {

  return (
    <div className='contenedor1'>
        {
          card.map(card =>(
            <div className='Ord-card1' key={card.id}>
              <Card title = {card.title}  imageSource= {card.image}  dat= {card.dat} face={card.facebook} ig ={card.ig}  git ={card.git}/>
            </div>
          ))
        }
      </div>
  )
}

export default Cards