import Cards from './cardsQuienesSomos';
import Navbar from './Navbar/Navbar';

function QuienesSomos(){
  return(
    <div>
      <Navbar/>
      <h1 className='titulo1'>¿Quienes somos?</h1>
      <p className='parrafoquienesomos'>Especialistas en crear contenidos. Investigadores de los lugares más reconditos de Google Amantes de la gente que escribe guion sin tilde. Rápidos hasta donde la calidad no se deteriora. Eficaces en llevar a cabo un plan, tu plan. Y más allá de todo eso, tu equipo </p>
      <Cards/>
      
      
    </div>
  )
}

export default QuienesSomos;