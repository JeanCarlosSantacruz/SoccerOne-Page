import Navbar from '../Navbar/Navbar';
import './Ligas.css'
import React from "react";
import Cards from './cards';

function Ligas(){
  
  return<div>
    <Navbar/>
      <h1 className='soccer'>
        SOCCER
      </h1>
      <h1 className='one'>
        ONE
      </h1>
    <Cards/>
  </div>
}


export default Ligas;