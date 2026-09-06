import github from './../../img/icons/gitHub.svg'
import tg from './../../img/icons/tg.png'

const Footer = () => {
    return (
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
    )
}

export default Footer