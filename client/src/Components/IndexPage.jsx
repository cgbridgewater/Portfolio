const getOutside = require(`../Assets/Images/getOutside.png`);
const candyShop = require(`../Assets/Images/candyShop.png`);
const petShelter = require(`../Assets/Images/petShelter.png`);

const Index = () => {

  return (

    <div>
            
      {/* Nav Bar*/}
      <nav id="navbar">

        <ul>

          <li><a class="section-link" href="#welcome-section"><i class="fas fa-chevron-right"></i>Welcome</a></li>

          <li><a class="section-link" href="#projects"><i class="fas fa-chevron-right"></i>Projects</a></li>

          <li><a class="section-link" href="#contact-section"><i class="fas fa-chevron-right"></i>Contact</a></li>

        </ul>

      </nav>

      {/* Welcome / Name */}
      <section id="welcome-section">

        <h1>Chris Bridgewater <br />
        Full Stack Web Developer</h1>

        <a id="link-to-contact" href="#contact-section">Contact me</a>

        <a id="link-to-projects" href="#projects"><i class="fa-solid fa-angle-down fa-bounce fa-2xl" style={{color:"#eb6028"}}></i></a>

      </section>

      {/* PROJECTS */}
      <section id="projects">

        <h2>My projects:</h2>

        <div id="projects-gallery">

          <div class="project-tile">
            <a href="http://52.33.105.171/" target="_blank" rel="noreferrer noopener">
              <img class="webpage-img" src={candyShop} alt="webpage screen"/>
            </a>
            <p class="project-caption">Candy Shop</p>
          </div>

          <div class="project-tile">
            <a href="http://54.201.23.108/getoutside" target="_blank" rel="noreferrer noopener">
              <img class="webpage-img" src={getOutside} alt="webpage screen"/>
            </a>
            <p class="project-caption">Get Outside</p>
          </div>

          <div class="project-tile">
            <a href="http://34.218.236.175/" target="_blank" rel="noreferrer noopener">
              <img class="webpage-img" src={petShelter} alt="webpage screen"/>
            </a>
            <p class="project-caption">Pet Shelter</p>
          </div>

          <div class="project-tile">
            <div>
              <div class="placeholder-img">
                <p>Coming soon</p>
              </div>
            </div>
            <p class="project-caption">Other</p>
          </div>

          <div class="project-tile">
            <div>
              <div class="placeholder-img">
                <p>Coming soon</p>
              </div>
            </div>
            <p class="project-caption">Other</p>
          </div>

          <div class="project-tile">
            <div>
              <div class="placeholder-img">
                <p>Coming soon</p>
              </div>
            </div>
            <p class="project-caption">Other</p>
          </div>

        </div>

        <a id="link-to-contact" href="#contact-section">Contact me</a>

      </section>

      {/* CONTACT */}
      <section id="contact-section">

        <div id="contact">

          <h2>Contact Me</h2>

          <h3>You can find me on my social media or send email:</h3>

          <ul id="links-list">
            <li><a href="https://www.linkedin.com/in/chris-bridgewater/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin"></i>Linked In</a></li>
            <li><a href="https://github.com/cgbridgewater" target="_blank" rel="noreferrer noopener"><i class="fab fa-github-square"></i>GitHub</a></li>
            <li><a href="https://www.instagram.com/cgbridgewater/" target="_blank" rel="noreferrer noopener"><i class="fab fa-instagram-square"></i>Instagram</a></li>
            <li><a href="mailto:cgbridgewater@outlook.com?subject=Web Development Contact"><i class="fas fa-envelope"></i>Email</a></li>
          </ul>

        </div>

        {/* FOOTER */}
        <div id="footer-container">
          <footer>
            <p>Photo by <a href="https://unsplash.com/@florianolv?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Florian Olivo</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>

            <p>Created 2023</p>
          </footer>
        </div>
      </section>

    </div>
  );
};

export default Index