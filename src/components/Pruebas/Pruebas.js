import React from "react";
import './Pruebas.css'

function pruebas(){
  const hola = ()=>{
    alert("hola")
  }
  const pulsar = ()=>{
    alert("pulsar")
    hola()
  }
  return(
    <body>
      <div id="div1"> 
        <div id="div2">
          <button onClick={pulsar}> Login</button>
        </div>
      </div>
    </body>
    
  )
}



export default pruebas