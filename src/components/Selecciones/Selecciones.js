import Navbar from '../Navbar/Navbar';
import './Selecciones.css'

function Selecciones(){
  return<div>
    <Navbar/>
    <h1>Bienvenido a las Selecciones</h1>
    <form action="/">
      <button className="Boton">Home</button>
    </form>
  </div>
}


export default Selecciones;