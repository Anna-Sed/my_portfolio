import { useState } from 'react'
import "./styles/main.css"
import Navbart from './components/navbar/Navbar'
import Header from './components/header/Header'
import github from './img/icons/gitHub.svg'
import tg from './img/icons/tg.png'

function App() {
  return (
    <div className='App'> 
      <Navbart />
      <Header />
      

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

      <footer className='footer'>
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              {/* <li className="social__item"><a href="#!"><img src="./img/icons/vk.svg" alt="Link" /></a></li> */}
              {/* <li className="social__item"><a href="#!"><img src="./img/icons/instagram.svg" alt="Link" /></a></li> */}
              {/* <li className="social__item"><a href="#!"><img src="./img/icons/twitter.svg" alt="Link" /></a></li> */}
              <li className="social__item"><a href="https://github.com/Anna-Sed"><img src={github} alt="Link"/></a></li>
              <li className="social__item"><a href="https://t.me/Ann_Sedeeva"><img src={tg} alt="Link" style={{ width: '38px' }}/></a></li>
            </ul>
            <div className="copyright">
              <p>© 2026 Anna Sedeeva</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
