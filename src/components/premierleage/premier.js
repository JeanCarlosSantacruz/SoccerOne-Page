import Navbar from '../Navbar/Navbar';
import './premier.css'


function Premier(){
  return(
  <div className='ligasMain'>
    <Navbar/>
      <div className='ligTittle' >
        <h1 >
          Premier league
        </h1>
      </div>
      <img src='./img/img2.webp'></img>
  </div>
  )
}


export default Premier;