import {React, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import firebaseApp from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Registro from './components/Registro/Registro';
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
import Error404 from './components/Error404/Error404';
import Pruebas from './components/Pruebas/Pruebas';
import './App.css';

const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (logueo.){
      console.log("existe")
    }else{
      console.log("no existe")
    }
  })
  return (
    <div className='App'>
      <header class='header1'>
        <Navbar/>
      </header>
      <h1 id='soccer'>
        SOCCER
      </h1>
      <h1 className='one'>
        ONE
      </h1>
      <h2 className='subText'>
        Todo lo que buscas
      </h2>
      <h2 className='subText2'>
        sobre futbol!
      </h2>
      <div className='containerApp'>
        <a className='links' href='/QuienesSomos'>¿Quienes Somos?</a> 
        <a className='links' href='*'>Ver más</a> 
        <a className='links' href='*'>Contactanos</a> 
      </div>
    </div>
  );
}

export default App;

