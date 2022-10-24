import Navbar from '../Navbar/Navbar';
import './IniciarSesion.css'


function IniciarSesion(){
  return<div className='Login'>
    <form action="">
      <h1 class='title'>Login</h1>
      <label>
        <i class="fa-solid fa-user"></i>
        <input placeholder="usuario"type="text" id="usuario"></input>
      </label>
      <label>
        <i class="fa-solid fa-lock"></i>
        <input placeholder="contraseña" type="contraseña" id="contraseña"></input>
      </label>
      <a href='#' class="link">¿Has olvidado tu contraseña?</a>
      <div >
        <a href='/' class="link">Crear cuenta</a>  <a href='/' class="link">Cancelar</a>
      </div>
      <button id="button" >Iniciar sesion</button>
    </form>
  </div>
}


export default IniciarSesion;