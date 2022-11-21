import React from 'react'
import styled from 'styled-components'
import logo from '../soccerone.svg';



function Navbar() {
  return (
    <>
      <Navb2>
          <a href="/"><img src={logo} alt= "logo" /></a> 
        <Nav>
          <a href='/Ligas'>Ligas</a>
          <a href='/Torneos'>Torneos</a>
          <a href='/Selecciones'>Selecciones</a>
          <a href='/IniciarSesion'>Iniciar sesion</a>
        </Nav>
      </Navb2>

    </>
  )
}

export default Navbar

const Navb2 = styled.nav`
  padding: .4r;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    height: 90px;
    margin-right: 45px;
    cursor: pointer;
    transition: 0.7s;
  }
  img:hover{
    -webkit-transform:scale(1.5);transform:scale(1.5)
    border: 5px dotted green;
  }
  
`

const Nav = styled.nav`
a{
  position: relative;
  text-decoration: none;
  font-family: 'Poppins',sans-serif;
  color: #a0a0a0;
  font-size: 18px;
  letter-spacing: 0.5px;
  padding: 0 30px;
  transition: 0.7s;
}
a:after{
  content: "";
  position: absolute;
  background-color: #ff3c78;
  height: 3px;
  width: 0;
  left: 0;
  bottom: -10px;
  transition: 0.3s;
}
a:hover{
  color: #ffffff;
  font-size: 24px;
}
a:hover:after{
  width: 100%;
}


`