import { Form } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './premier.css';
import img1 from './img/img1.png';
import img3 from './img/img3.png';

function Premier(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <div className='ligTittle' >
        <h1 >
          Premier league
        </h1>
      </div>
      <div>
        <img src= {img1}  className='img1'></img>
      </div>
      <div>
      <img src= {img3}  className='img3'></img>
      </div>

      <div className='histo' >
        <p> La Premier League (en español: Liga Principal), también conocida en Inglaterra como The Premiership, es la máxima categoría del sistema de ligas de fútbol de Inglaterra. Comenzó a disputarse en la temporada 1992-93. En ella pueden también participar, por motivos históricos, aquellos clubes galeses que lo deseen, siempre que hayan competido ininterrumpidamente en el sistema de fútbol federado inglés desde, al menos, el 30 de junio de 1992. Este es el caso del Swansea City y del Cardiff City, clubes radicados en Gales participantes de la liga y que han llegado a representar a Inglaterra en competiciones europeas. </p>    
      </div>
  </div>
  )
}


export default Premier;