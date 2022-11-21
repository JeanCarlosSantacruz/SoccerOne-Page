import React, {useState} from "react";
import './Registro.css'
import logoRegister from '../soccerone2.svg'
import firebaseApp from '../../credenciales';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider,} from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

function Registro(){
  async function pulsar(e){
    e.preventDefault();
    console.log("funciona")
    const correo = e.target.correoUser.value;
    const contra = e.target.contraUser.value;
    const usuario = await createUserWithEmailAndPassword(
      auth, 
      correo, 
      contra);
  }
  const [showPass, setShowPass] = useState(false);

  return<div className='Registro'>
    
    <div class='title'>
      <img src={logoRegister} alt= "logo" className='logoRegister'/>{} 
    </div>
    <form onSubmit={pulsar} id='divForm'>
      <label>
        <i class="fa-solid fa-user"></i>
        <input placeholder="nombre"type="text" id="nombre"></input>
      </label>
      <label>
        <i class="fa-solid fa-envelope"></i>
        <input placeholder="correo electronico"type="text" id="correoUser"></input>
      </label>
      <label>
        <i class="fa-sharp fa-solid fa-unlock"></i>
        <input placeholder="contraseña" type={showPass ? "text" : 'password'} id="contraUser"></input>
        {showPass ? <i class="fa-solid fa-eye" id='eye' onClick={()=> setShowPass(!showPass)}></i> : <i class="fa-sharp fa-solid fa-eye-slash" id='eye' onClick={()=> setShowPass(!showPass)}></i> }
      </label>
      <label>
        <i class="fa-sharp fa-solid fa-lock"></i>
        <input placeholder="confirmas contraseña"type={showPass ? "text" : 'password'} id="confirmas contraseña"></input>
        {showPass ? <i class="fa-solid fa-eye" id='eye' onClick={()=> setShowPass(!showPass)}></i> : <i class="fa-sharp fa-solid fa-eye-slash" id='eye' onClick={()=> setShowPass(!showPass)}></i> }
      </label>
      <a href='/' class="link">cancelar</a>
        <float href='/Registro' class="link">¿Ya tienes cuenta?</float>  <a href='/IniciarSesion' class="link">Iniciar sesion</a> 
        <button id="button" >Crear cuenta</button>
    </form>
  </div>
}


export default Registro;