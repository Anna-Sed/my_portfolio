import { useState } from 'react'
import "./styles/main.css"
import Navbart from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home'
import Projects from './pages/Projects'


function App() {
  return (
    <div className='App'> 
      <Navbart />
      <Home />
      <Projects />
      <Footer />

    </div>
  )
}

export default App
