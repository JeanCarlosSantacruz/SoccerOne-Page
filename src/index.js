import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import Ligas from './components/Ligas/Ligas';
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
import Registro from './components/Registro/Registro';
import Selecciones from './components/Selecciones/Selecciones';
import Torneos from './components/Torneos/Torneos';
import Contactanos from './components/Contactanos/Contactanos';
import Error404 from './components/Error404/Error404';
import Pruebas from './components/Pruebas/Pruebas';
import Premier from './components/premierleage/premier';
import {Routes, Route, BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
        <Route path="/Ligas" element={<Ligas/>}/>
        <Route path="/Torneos" element={<Torneos/>}/>
        <Route path="/Selecciones" element={<Selecciones/>}/>
        <Route path="/Registro" element={<Registro/>}/>
        <Route path="/IniciarSesion" element={<IniciarSesion/>}/>
        <Route path='/Contactanos' element={<Contactanos/>}/>
        <Route path='/Pruebas' element={<Pruebas/>}/>
        <Route path='/premier' element={<Premier/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);