import './Registro.css'
import logoRegister from '../soccerone2.svg'


function Registro(){
  return<div className='Registro'>
    <div class='title'>
      <img src={logoRegister} alt= "logo" className='logoRegister'/>{} 
    </div>
    <form >
      <label>
        <i class="fa-solid fa-user"></i>
        <input placeholder="nombre"type="text" id="nombre"></input>
      </label>
      <label>
        <i class="fa-solid fa-envelope"></i>
        <input placeholder="correo electronico"type="text" id="correo electronico"></input>
      </label>
      <label>
        <i class="fa-sharp fa-solid fa-unlock"></i>
        <input placeholder="contraseña" type="contraseña" id="contraseña"></input>
      </label>
      <label>
        <i class="fa-sharp fa-solid fa-lock"></i>
        <input placeholder="confirmas contraseña"type="text" id="confirmas contraseña"></input>
      </label>
      <a href='/' class="link">cancelar</a>
      <div >
        <float href='/Registro' class="link">¿Ya tienens cuenta?</float>  <a href='/IniciarSesion' class="link">Iniciar sesion</a>
      </div>
      <button id="button" >Crear cuenta</button>
    </form>
  </div>
}


export default Registro;