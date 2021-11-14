import TagCloud from '../../components/LearnedTools/LearnedTools'
import Apre from './Aprend.json'
import './AboutMe.css'

const AboutMe = () => {

    return (
        <div className="container">
        <section className="about">
            <p className="top_a">{"<h2>"}</p>
            <h2 >Sobre mí</h2>
            <p className="top2_a">{"</h2>"}</p>
            <p className="top_a">{"<p>"}</p>
            <div className="description2">
            <p >Soy un apasionado por el desarrollo web, me interesa la ciberseguridad por el cual realicé un curso en Suite Hacking una academia Mexicana en el 2020 y en ese mismo año ingrese a la Universidad a estudiar Ingeniería de sistemas, me gustan los deportes extremos, también trabajé como guía turístico en un ecoparque en donde aprendí a trabajar en equipo y la atención al cliente.
            </p>
            <div className="icons">
                
            {
                Apre.map(items=>
                    <TagCloud key={items.id} items={items}/>
                    )
                }

                </div>
                </div>
            <span className="top2_a">{"</p>"}</span>
            
        </section>
        </div>
    )
}

export default AboutMe
