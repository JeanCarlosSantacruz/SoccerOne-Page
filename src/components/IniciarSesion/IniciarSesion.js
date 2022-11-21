
import Navbar from '../Navbar/Navbar';
import './IniciarSesion.css'
import logo from '../soccerone3.svg';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import firebaseApp from '../../credenciales';
import pruebas from '../Pruebas/Pruebas';
import {getAuth, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider,} from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();


function IniciarSesion(){
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  async function iniciar(e) {
    e.preventDefault();
    const correo = e.target.correo.value;
    const contra = e.target.contra.value;
    const logueo = await signInWithEmailAndPassword(auth, correo, contra);
    if (logueo.user =! null){
      console.log("existe");
      navigate("/");
    }
  } 
  return<div className='Login'>
    <div class='title'>
      <img src={logo} alt= "logo" className='logo'/>{} 
    </div>
    <form onSubmit={iniciar} id='divForm'>
      <label>
        <i class="fa-solid fa-envelope" id='correoI'></i>
        <input placeholder="correo"type="text" id="correo" ></input>
      </label>
      <label>
        <i class="fa-solid fa-lock"></i>
        <input placeholder="contraseña" type={showPass ? "text" : 'password'} id="contra"></input>
        {showPass ? <i class="fa-solid fa-eye" id='eye' onClick={()=> setShowPass(!showPass)}></i> : <i class="fa-sharp fa-solid fa-eye-slash" id='eye' onClick={()=> setShowPass(!showPass)}></i> }
        
      </label>
      <a href='#' class="link">¿Has olvidado tu contraseña?</a>
      <div >
        <a href='/Registro' class="link">Crear cuenta</a>  <a href='/' class="link">Cancelar</a>
      </div>
      <button id="button" >Iniciar sesion</button>
    </form>
  </div>
}


export default IniciarSesion;