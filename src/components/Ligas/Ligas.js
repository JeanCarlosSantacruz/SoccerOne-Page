import Navbar from '../Navbar/Navbar';
import './Ligas.css'
import React from "react";
import Cards from './cards';

function Ligas(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <h1 id='ligaTittle'>
        Ligas
      </h1>
      <div>
        <Cards/>
      </div>
  </div>
  )
}


export default Ligas;