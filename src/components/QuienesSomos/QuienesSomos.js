import Cards from './cardsQuienesSomos';
import Navbar from '../Navbar/Navbar';
import './QuienesSomos.css'

function QuienesSomos(){
  return(
    <div className='quienesSomos'>
      <Navbar/>
      <h1 id='titulo1'>¿Quienes somos?</h1>
      <div className='guiaparrafo'>
      <p id='parrafo1'>Especialistas en crear contenidos. Investigadores de los lugares más reconditos de Google, amantes de la gente que escribe guion sin tilde. Rápidos hasta donde la calidad no se deteriora. Eficaces en llevar a cabo un plan, tu plan. Y más allá de todo eso.</p>
      </div>
      <Cards/>
    </div>
  )
}

export default QuienesSomos;