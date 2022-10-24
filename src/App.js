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
      <h1 className='soccer'>
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
      <div>
        <Buttonini/>
      </div>
    </div>
  );
}

export default App;

