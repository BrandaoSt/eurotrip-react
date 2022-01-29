import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import franca from '../franca5.jpg'
import inglaterra from '../inglaterra2.jpg'
import holanda from '../holanda6.jpg'
import veneza from '../veneza.jpg'
import sintra from '../sintra8.jpg'
import espanha from '../espanha3.jpg'
import lisboa from '../portugal1.jpg'
import roma from '../Roma7.jpg'

const Destinos = () => {
    return (
        <div className='destinos'>
            <h1 className='py-5'>Destinos</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>França - Paris</h3>
                            <div>
                                <img className='pais' src={franca} alt='franca'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>Inglaterra - Londres</h3>
                            <div>
                                <img className='pais' src={inglaterra} alt='inglaterra'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>Itália - Veneza</h3>
                            <div>
                                <img className='pais' src={veneza} alt='franca'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>Holanda - Amsterdam</h3>
                            <div>
                                <img className='pais' src={holanda} alt='franca'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>Espanha - Madrid</h3>
                            <div>
                                <img className='pais' src={espanha} alt='franca'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>Portugal - Sintra</h3>
                            <div>
                                <img className='pais' src={sintra} alt='franca'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>Portugal - Lisboa</h3>
                            <div>
                                <img className='pais' src={lisboa} alt='franca'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                        <div className='box'>
                            <div className='circle'><FontAwesomeIcon className='icon' icon={faPlane} size='2x' /></div>
                            <h3 className='nomepais'>Itália - roma</h3>
                            <div>
                                <img className='pais' src={roma} alt='franca'></img>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinos
