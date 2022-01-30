import React from 'react'
import logo from '../imagens/eurologo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className='container'>
                <a className="navbar-brand" href="/#"><img className='logo' src={logo} alt='logo eurotrip' /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:'#fff'}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">Início<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Destinos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Promoções</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
