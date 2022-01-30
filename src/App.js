import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Destinos from './components/Destinos'
import Rotas from './components/Rotas'
import Promocoes from './components/Promocoes'
import Avaliacoes from './components/Avaliacoes'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Sobre/>
      <Destinos/>
      <Rotas/>
      <Promocoes/>
      <Avaliacoes/>
      <Contato/>
      <Footer/>
    </div>
  )
}

export default App;
