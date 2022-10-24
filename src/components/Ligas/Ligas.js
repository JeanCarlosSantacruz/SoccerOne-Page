import Navbar from '../Navbar/Navbar';
import './Ligas.css'
import React from "react";
import Cards from './cards';

function Ligas(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <h1 className='soccerL'>
        SOCCER
      </h1>
      <h1 className='oneL'>
        ONE
      </h1>
    <Cards/>
  </div>
  )
}


export default Ligas;