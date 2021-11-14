import CardProjects from '../../components/CardProjects/CardProjects'
import Data from './Projects.json'
import './Projects.css'

const Projects = () => {
    return (
        <div className="container">
        <section className="projects">
        <p className="top_p">{"<h2>"}</p>
        <h2 >Mis Proyectos</h2>
        <p className="top2_p">{"</h2>"}</p>
        <p className="top2_p">{"<p>"}</p>
        <p className='description'>Esta es la  mi galeria de proyectos que recientemente he realizado, es la demostración de mis habilidades como desarrolador web</p>
        <p className="top2_p">{"</p>"}</p>
        <div className="Cards-p">
            {
                Data.map(items=> <CardProjects key={items.id} items={items}/>)
            }
        </div>
    </section>
    </div>
    )
}

export default Projects
