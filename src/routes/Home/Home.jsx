import React from 'react'
import './Home.css'
import "animate.css"
import images from '../../components/assest/images'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
        <section className="home">
            <p className="top">
                {" <h1> " }
            </p>
            <h1>
                <span>H</span>
                <span>o</span>
                <span>l</span>
                <span>a</span>
                <span>,</span>
                <br/>
                <span>S</span>
                <span>o</span>
                <span>y</span> <span>Y</span>
                <span>e</span>
                <span>f</span>
                <span>e</span>
                <span>r</span>
                <span>s</span>
                <span>o</span>
                <span>n</span>
                <span>,</span>
                <br/>
                <span>D</span>
                <span>e</span>
                <span>s</span>
                <span>a</span>
                <span>r</span>
                <span>r</span>
                <span>o</span>
                <span>l</span>
                <span>l</span>
                <span>a</span>
                <span>d</span>
                <span>o</span>
                <span>r</span> <span>W</span>
                <span>e</span> 
                <span>b</span>
                <span className="top2">{" </h1> "} </span>
            </h1>
            <div className="foto">
                <img id="fotos" src={images.foto} alt="foto de Yeferson" />
                <img id="fotosR" src={images.fotoR} alt="foto de Yeferson" />

            </div>
            <p className="top">
                {" <p> " }
            </p >
            <p className="FB">Front End y Back End beginner</p>
            <p className="top2">
                {" </p> " }
            </p>
            <Link to="/contact"> <button className="btn uno"><span>Contactame!</span></button></Link>
        </section>
        </div>
    )
}

export default Home
