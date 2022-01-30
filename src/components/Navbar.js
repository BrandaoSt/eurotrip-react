import React from 'react'
import logo from '../imagens/eurologo.png'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className='container'>
                <Link smooth={true} to='inicio' className="navbar-brand" href="/#"><img className='logo' src={logo} alt='logo eurotrip' /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to='inicio' className="nav-link" href="/#">Início<span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='sobre' offset={-60} className="nav-link" href="/#">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='destinos' offset={-60} className="nav-link" href="/#">Destinos</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='rotas' offset={-60} className="nav-link" href="/#">Rotas</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='promocoes' offset={-60} className="nav-link" href="/#">Promoções</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to='contato' offset={-60} className="nav-link" href="/#">Contato</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
