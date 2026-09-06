import games from './../img/projects/games.jpg'
import diff from './../img/projects/diff.jpg'
import rssAgregator from './../img/projects/rssAgregator.jpg'
import travelAgent from './../img/projects/travelAgent.png'
import clothingShop from './../img/projects/clothingShop.jpg'

const Projects = () => {
    return (
        <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="./project-page.html">
                        <img src={games} alt="Project img" className="project__img" />
                        <h3 className="project__title">Brain games</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="./project-page.html">
                        <img src={diff} alt="Project img" className="project__img" />
                        <h3 className="project__title">Difference Generator</h3>
                    </a>
                </li>
                <li className="project">
                    <img src={clothingShop} alt="Project img" className="project__img" />
                    <h3 className="project__title">Clothing website</h3>
                </li>
                <li className="project">
                    <img src={travelAgent} alt="Project img" className="project__img" />
                    <h3 className="project__title">Travel-агенство</h3>
                </li>
                
                <li className="project">
                    <a href="./project-page.html">
                        <img src={rssAgregator} alt="Project img" className="project__img" />
                        <h3 className="project__title">RSS agregator</h3>
                    </a>
                </li>
                {/* <li className="project">
                    <img src="./img/projects/06.jpg" alt="Project img" className="project__img" />
                    <h3 className="project__title"></h3>
                </li> */}

            </ul>
        </div>
    </main>
    )
}

export default Projects