import './App.css';
import Navbar from './components/Navbar/Navbar';







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
      <div className='containerApp'>
        <a className='links' href='/QuienesSomos'>¿Quienes Somos?</a> 
        <a className='links' href='*'>Ver más</a> 
        <a className='links' href='*'>Contactanos</a> 
      </div>
    </div>
  );
}

export default App;

