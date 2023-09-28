import AboutMeModal from "../AboutMeModal/AboutMeModal"
import Email from "../EmailModal/EmailModal"
import ResumeModal from "../ResumeModal/ResumeModal"
import "./Contact.css"

function Contact() {

    return(
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
                {/* ABOUT ME POPUP */}
                <AboutMeModal/>
                {/* EMAIL POPUP */}
                <Email/>
                {/* RESUME POPUP */}
                <ResumeModal/>
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
        </section>
    )
}

export default Contact