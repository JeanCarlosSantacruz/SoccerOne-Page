
import Navbar from '../Navbar/Navbar';
import './Torneos.css'
import Cards from './cardsTorneos';

function Torneos(){
  return<body>
    <div className='torneosMain'>
      <Navbar/>
      <h1 id='ligaTittle'>
        Torneos
      </h1>
     
        <div>
          <Cards/>
        </div>      
    
    </div>

  </body>
}


export default Torneos;