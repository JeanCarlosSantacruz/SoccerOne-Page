import React from "react"
import './Ver+.css'
import Navbar from "../Navbar/Navbar"
import CardsVerMas from "./CardsVerMas"

function VerMas(){
  return<body id="VerMas">
  <Navbar/>
  <h1 id='soccer'> SOCCER </h1>
  <h1 className='one'>ONE</h1>
  <h1 className="subT1">Brindamos toda la información que desees</h1>
  <h1 className="subT2">sobre tus equipos favoritos</h1>
  <div>
    <CardsVerMas/>
  </div>
  
</body>
}

export default VerMas