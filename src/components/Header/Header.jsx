import './Header.css';
import images from '../assest/images'
import {Link} from 'react-router-dom'
import { useState } from 'react';

const Header = () => {

    const [menu, setMenu] = useState(false) 
    const silver = ()=> setMenu(!menu)
    return (
        <header className={menu ? 'header active_menu':'header'}>
            <div className="logo_header">
                <div  className={menu ? 'open active_button': 'open'} onClick={silver} >
                    <img  src={images.open_menu} alt="open menu" />
                </div>
                <div className={menu ? 'close ': 'close active_button'} onClick={silver} >
                    <img src={images.close_menu} alt="close menu" />
                </div>
                <img src={images.logo} alt="logo" />
                <h2>Yeferson Rojas Olcunche</h2>
                <p>Desarrolador web</p>
            </div>
            <nav className="menu">
                <Link to='/' onClick={silver}>Inicio</Link>
                <Link to='/projects' onClick={silver}>Proyectos</Link>
                <Link to='/about' onClick={silver}>Sobre mí</Link>
                <Link to='/contact' onClick={silver}>Contacto</Link>
            </nav>
            <ul className="networks">
                <li>
                    <a href="https://www.linkedin.com/in/yeferson-rojas-olcunche-0380181bb/" onClick={silver} target="_blank" rel="noopener noreferrer"><img src={images.linkedin} alt="linkedin"  /></a>
                    <a href="https://www.instagram.com/yeferson_55/" onClick={silver} target="_blank" rel="noopener noreferrer"><img src={images.instagram} alt="instagram" /></a>
                    <a href="https://github.com/ye564" onClick={silver} target="_blank" rel="noopener noreferrer"><img src={images.github} alt="github" /> </a>
                    <a href="https://www.facebook.com/yeferson.rojas.9638" onClick={silver} target="_blank" rel="noopener noreferrer"><img src={images.facebook} alt="facebook" /></a>
                </li>
            </ul>
        </header>
    )
}

export default Header
