import React from "react";
import './Prueba.css'

function Login(){
  return<div className='Loginn'>
    <h1 className="tittle">Login</h1>
    <form >
      <label>
        <i class="fa-solid fa-user"></i>
        <input placeholder="usuario"type="text" id="usuario"></input>
      </label>
      <label>
        <i class="fa-solid fa-lock"></i>
        <input placeholder="contraseña" type="contraseña" id="contraseña"></input>
      </label>
      <a href='#' class="link">¿Has olvidado tu contraseña?</a>
      <button id="button" >Login</button>
    </form>
  </div>
}

export default Login