import React from 'react'
import roma from '../imagens/roma.jpg'
import inglaterra from '../imagens/inglaterra2.jpg'
import lisboa from '../imagens/portugal1.jpg'
import veneza from '../imagens/veneza.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'
/* eslint-disable jsx-a11y/anchor-is-valid */

const Promocoes = () => {
    
    //Popupbox Roma
    const openPopupboxRoma = () => {

        const content = (
         
        <>
        <img className='promocoes-image-popupbox' src={roma} alt='roma' />
        <p>R$ 5.900 à vista até o dia 30/02/2022</p>
        <b>Para mais informações, entre em contato conosco através dos nossos meios de comunicação ou pelo nosso site de vendas </b>
        <a className='hyper-link' onClick={() => window.open("https://github.com/BrandaoSt/eurotrip-react", '_blank')}>https://github.com/BrandaoSt/eurotrip-react</a>
        </>
            )
        PopupboxManager.open({ content })
    }

    const popupboxConfigRoma = {
        titleBar: {
            enable: true,
            text: "Itália - Roma saindo de Portugal - Lisboa" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //popup box Inglaterra
    const openPopupboxInglaterra = () => {

        const content = (
         
        <>
        <img className='promocoes-image-popupbox' src={inglaterra} alt='roma' />
        <p>R$ 4.900 à vista até o dia 30/02/2022</p>
        <b>Para mais informações, entre em contato conosco através dos nossos meios de comunicação ou pelo nosso site de vendas </b>
        <a className='hyper-link' onClick={() => window.open("https://github.com/BrandaoSt/eurotrip-react", '_blank')}>https://github.com/BrandaoSt/eurotrip-react</a>
        </>
            )
        PopupboxManager.open({ content })
    }

    const popupboxConfigInglaterra = {
        titleBar: {
            enable: true,
            text: "Inglaterra - Londres saindo da França - Paris" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Popupbox Lisboa

    const openPopupboxLisboa = () => {

        const content = (
         
        <>
        <img className='promocoes-image-popupbox' src={lisboa} alt='lisboa' />
        <p>R$ 2.900 à vista até o dia 30/02/2022</p>
        <b>Para mais informações, entre em contato conosco através dos nossos meios de comunicação ou pelo nosso site de vendas </b>
        <a className='hyper-link' onClick={() => window.open("https://github.com/BrandaoSt/eurotrip-react", '_blank')}>https://github.com/BrandaoSt/eurotrip-react</a>
        </>
            )
        PopupboxManager.open({ content })
    }

    const popupboxConfigLisboa = {
        titleBar: {
            enable: true,
            text: "Portugal - Lisboa saindo da Espanha - Madrid" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Popupbox Veneza

    const openPopupboxVeneza = () => {

        const content = (
         
        <>
        <img className='promocoes-image-popupbox' src={veneza} alt='veneza' />
        <p>R$ 3.900 à vista até o dia 30/02/2022</p>
        <b>Para mais informações, entre em contato conosco através dos nossos meios de comunicação ou pelo nosso site de vendas </b>
        <a className='hyper-link' onClick={() => window.open("https://github.com/BrandaoSt/eurotrip-react", '_blank')}>https://github.com/BrandaoSt/eurotrip-react</a>
        </>
            )
        PopupboxManager.open({ content })
    }

    const popupboxConfigVeneza = {
        titleBar: {
            enable: true,
            text: "Itália - Veneza saindo de Portugal - Lisboa" 
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id='promocoes' className='promocoes-wrapper'>
            <div className='container'>
                <h1 className='text-uppercase text-center py-5'>Promoções</h1>
                <div className='image-box-wrapper row row-cols-auto justify-content-center'>
                    <div className='promocoes-image-box' onClick={openPopupboxRoma}>
                        <img className='promocoes-image' src={roma} alt='roma'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='promocoes-icon' icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className='promocoes-image-box' onClick={openPopupboxInglaterra} >
                        <img className='promocoes-image' src={inglaterra} alt='inglaterra'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='promocoes-icon' icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className='promocoes-image-box' onClick={openPopupboxLisboa} >
                        <img className='promocoes-image' src={lisboa} alt='lisboa'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='promocoes-icon' icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className='promocoes-image-box'onClick={openPopupboxVeneza}>
                        <img className='promocoes-image' src={veneza} alt='veneza'/>
                        <div className='overflow'></div>
                        <FontAwesomeIcon className='promocoes-icon' icon={faSearchPlus} />
                    </div>
                    {/* - */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigRoma}/>
            <PopupboxContainer {...popupboxConfigInglaterra}/>
            <PopupboxContainer {...popupboxConfigLisboa}/>
            <PopupboxContainer {...popupboxConfigVeneza}/>
        </div>
    )
}

export default Promocoes
