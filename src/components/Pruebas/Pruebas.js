import React from "react";
import './Pruebas.css'

function pruebas(){
  const pulsar = () =>{
    console.log("Me has pulsado")
  }
  return(
    <button id="boton" onClick={()=>{pulsar()}}>Pulsame!</button>
  )
}



export default pruebas