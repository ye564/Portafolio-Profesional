import './CardProjects.css'

const CardProjects = ({items}) => {
    return (
        <section className="Card_projects">
        <div className="card">
            <div className="front">
                {/* <h2>{items.name}</h2> */}
                <a href={items.link} target="_blank" rel="noopener noreferrer">
                    <img src={items.photo} alt={items.name}/>
                </a>
            </div>
        </div>
    </section>
    )
}

export default CardProjects
