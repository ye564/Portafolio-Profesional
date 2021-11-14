import '../../routes/AboutMe/AboutMe.css'
const LearnedTools = ({items}) => {
    return (
        <div className="container_nivel">
            <div className="skills">
                <p >{items.name}</p>
                <p>{items.nivel}%</p>
            </div>
            <div className={items.class}></div>
        </div>
    )
}

export default LearnedTools
