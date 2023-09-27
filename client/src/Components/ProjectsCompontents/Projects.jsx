import "./Projects.css"

const Projects = () => {
    const getOutside = require(`../../Assets/Images/getOutside.png`);
    const candyShop = require(`../../Assets/Images/candyShop.png`);
    const petShelter = require(`../../Assets/Images/petShelter.png`);
    const tetris = require(`../../Assets/Images/MyTetris.png`);
    const drawIt = require(`../../Assets/Images/DrawIt.png`);
    const fireball = require(`../../Assets/Images/Fireball.png`);

    return (
        <section id="projects">
            <h2>My projects:</h2>
            <div id="projects-gallery">
                {/* project 1 */}
                <div className="project-tile">
                    <a href="http://34.218.236.175/" target="_blank" rel="noreferrer noopener">
                    <img className="webpage-img" src={petShelter} alt="webpage screen"/>  
                    </a>
                    <p className="project-caption">Pet Shelter (MERN/React.js)</p>
                    <p className="project-caption2">Solo Project</p>
                </div>
                {/* project 2 */}
                <div className="project-tile">
                    <a href="http://54.201.23.108/getoutside" target="_blank" rel="noreferrer noopener">
                    <img className="webpage-img" src={getOutside} alt="webpage screen"/>
                    </a>
                    <p className="project-caption">Get Outside (Python)</p>
                    <p className="project-caption2">Solo Project</p>
                </div>
                {/* project 3 */}
                <div className="project-tile">
                    <a href="http://52.33.105.171/" target="_blank" rel="noreferrer noopener">
                    <img className="webpage-img" src={candyShop} alt="webpage screen"/>
                    </a>
                    <p className="project-caption">Candy Shop (MERN/React.js)</p>
                    <p className="project-caption2">Dojo Group Project</p>
                </div>
                {/* project 4 */}
                <div className="project-tile">
                    <a href="https://fireballdata.vercel.app/" target="_blank" rel="noreferrer noopener">
                    <img className="webpage-img" src={fireball} alt="webpage screen"/>
                    </a>
                    <p className="project-caption">Fireball (React/Next.js)</p>
                    <p className="project-caption2">Chingu Group Project</p>
                </div>
                {/* project 5 */}
                <div className="project-tile">
                    <a href="http://52.38.15.176/" target="_blank" rel="noreferrer noopener">
                    <img className="webpage-img" src={drawIt} alt="webpage screen"/>
                    </a>
                    <p className="project-caption">Draw It! - Mini Game (React.js)</p>
                    <p className="project-caption2">Solo Project</p>
                </div>
                {/* project 6 */}
                <div className="project-tile">
                    <a href="http://35.88.143.101/" target="_blank" rel="noreferrer noopener">
                    <img className="webpage-img" src={tetris} alt="webpage screen"/>
                    </a>
                    <p className="project-caption">Tetris - PC Mini Game (React.js)</p>
                    <p className="project-caption2">Solo Project</p>
                </div>
            </div>
            {/* CONTACT LINK */}
            <a id="link-to-projects" href="#contact"><i className="fa-solid fa-angle-down fa-bounce fa-2xl" style={{color:"#eb6028"}}></i></a>
        </section>
    )
}

export default Projects