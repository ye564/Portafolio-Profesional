import { Route, Routes } from "react-router-dom"
import AboutMe from "./AboutMe/AboutMe"
import Contact from "./Contact/Contact"
import Projects from "./Projects/Projects.jsx"
import Home from "./Home/Home"

const Rout = () => {
    return (
    <Routes>
        <Route path='/'exact element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<AboutMe/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    )
}

export default Rout
