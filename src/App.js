import './App.css';
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar';
import Buttonini from './components/ButtonIni/Buttonini';





function App() {
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
      
      <a className='links' href='/QuienesSomos'>¿Quienes Somos?</a> 
      <a className='links' href='/'>Ver más</a> 
      <a className='links' href='/Contactanos'>Contactanos</a> 
    </div>
  );
}

export default App;

