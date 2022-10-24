import React from "react";
import './Contactanos.css'
import Navbar from "../Navbar/Navbar";
import ImgC from './News.jpg';


function Contactanos(){
  return(
    <div className="contactanosMain">
      <Navbar/>
      <img src={ImgC} alt= "ImgC" className="ImgC"/>
      <h1 className="contactanosT">CONTACTANOS</h1>
    </div>
  )
}

export default Contactanos