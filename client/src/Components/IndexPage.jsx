import ResumeModal from "./ResumeModal";

const resume = require(`../Assets/Images/ChrisBridgewater_resume_image.jpg`);
const getOutside = require(`../Assets/Images/getOutside.png`);
const candyShop = require(`../Assets/Images/candyShop.png`);
const petShelter = require(`../Assets/Images/petShelter.png`);
const tetris = require(`../Assets/Images/MyTetris.png`);
const drawIt = require(`../Assets/Images/DrawIt.png`);

const Index = () => {

  return (

    <div className="main-container">
      {/* NAV BAR*/}
      <nav id="navbar">
        <ul>
          <li><a className="section-link" href="#welcome-section"><i className="fas fa-chevron-right"></i>Welcome</a></li>
          <li><a className="section-link" href="#projects"><i className="fas fa-chevron-right"></i>Projects</a></li>
          <li><a className="section-link" href="#contact-section"><i className="fas fa-chevron-right"></i>Contact</a></li>
        </ul>
      </nav>
      {/* NAV BAR END*/}
      {/* WELCOME */}
      <section id="welcome-section">
        <h1>Chris Bridgewater <br />
        Full Stack Web Developer
        <br /><span className="titleSpan">MERN / Java / Python</span>
        </h1>
        <a id="link-to-contact" href="#contact-section">Contact me</a>
        <a id="link-to-projects" href="#projects"><i className="fa-solid fa-angle-down fa-bounce fa-2xl" style={{color:"#eb6028"}}></i></a>
      </section>
      {/* WELCOME END */}
      {/* PROJECTS */}
      <section id="projects">
        <h2>My projects:</h2>
        <div id="projects-gallery">
          {/* project 1 */}
          <div className="project-tile">
            <a href="http://34.218.236.175/" target="_blank" rel="noreferrer noopener">
              <img className="webpage-img" src={petShelter} alt="webpage screen"/>  
            </a>
            <p className="project-caption">Pet Shelter (MERN)</p>
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
            <p className="project-caption">Candy Shop (MERN)</p>
            <p className="project-caption2">Group Project</p>
          </div>
          {/* project 4 */}
          <div className="project-tile">
            <a href="http://35.88.143.101/" target="_blank" rel="noreferrer noopener">
              <img className="webpage-img" src={tetris} alt="webpage screen"/>
            </a>
            <p className="project-caption">Tetris - PC Mini Game (React.js)</p>
            <p className="project-caption2">Solo Project</p>
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
            <div>
              <div className="placeholder-img">
                <p>Coming soon</p>
              </div>
            </div>
            <p className="project-caption">C# Project</p>
            <p className="project-caption2">&nbsp;</p>
          </div>
        </div>
        {/* CONTACT LINK */}
        <a id="link-to-projects" href="#contact"><i className="fa-solid fa-angle-down fa-bounce fa-2xl" style={{color:"#eb6028"}}></i></a>
        {/* CONTACT LINK END */}
      </section>
      {/* PROJECT END */}
      {/* CONTACT */}
      <section id="contact-section">
        <div id="contact">
          {/* CONTACT TITLE */}
          <h2>Contact Me</h2>
          <h3>You can find me on my social media or send email:</h3>
          {/* CONTACT TITLE END */}
          {/* MEDIA LINKS */}
          <ul id="links-list">
            <li><a href="https://www.linkedin.com/in/chris-bridgewater/" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-linkedin"></i>Linked In</a></li>
            <li><a href="https://github.com/cgbridgewater" target="_blank" rel="noreferrer noopener"><i className="fab fa-github-square"></i>GitHub</a></li>
            <li><a href="https://www.instagram.com/cgbridgewater/" target="_blank" rel="noreferrer noopener"><i className="fab fa-instagram-square"></i>Instagram</a></li>
            <li><a href="mailto:cgbridgewater@outlook.com?subject=Web Development Contact"><i className="fas fa-envelope"></i>Email</a></li>
            {/* RESUME POPUP */}
            <ResumeModal/>
            {/* RESUME POP UP END */}
          </ul>
          {/* MEDIA LINKS END */}
          {/* PROFILE IMAGE */}
          <div className="card card0">
            <div className="border">
              <h2 className="cardName">Chris Bridgewater</h2>
              <h3 className="cardName">Web Developer</h3>
            </div>
          </div>
          {/* PROFILE IMAGE END */}
        </div>
        {/* FOOTER */}
        <div id="footer-container">
          <footer>
            <p>Created 07/2023</p>
          </footer>
        </div>
        {/* FOOTER END */}
      </section>
      {/* CONTACT END */}
    </div>
  );
};

export default Index