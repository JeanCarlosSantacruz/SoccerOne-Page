import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import QuienesSomos from './components/QuienesSomos';
import Ligas from './components/Ligas/Ligas';
import IniciarSesion from './components/IniciarSesion/IniciarSesion';
import Selecciones from './components/Selecciones/Selecciones';
import Torneos from './components/Torneos/Torneos';
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
        <Route path="/IniciarSesion" element={<IniciarSesion/>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);