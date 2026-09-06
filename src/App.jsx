import { useState } from 'react'
import "./styles/main.css"
import Navbart from './components/navbar/Navbar'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className='App'> 
      <Navbart />
      <Header />
      <Footer />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, BootStrap</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS</p>
            </li>
          </ul>
        </div>
      </main>

    </div>
  )
}

export default App
