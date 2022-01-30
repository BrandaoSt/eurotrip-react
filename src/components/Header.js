import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div id='inicio' className='header-wraper'>
        <div className='main-info'>
            <h1>Viaje com menos planos e mais liberdade</h1>
            <Typed className='typed-text' strings={["França", "Inglaterra", "Itália", "Holanda"]} typeSpeed={40} backSpeed={60} loop/>
            <Link smooth={true} to='contato' href='/#' className='btn-promo'>Faça já sua reserva</Link>
        </div>
      
    </div>
  )
}

export default Header 