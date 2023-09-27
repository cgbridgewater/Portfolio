import "./Welcome.css"

const Welcome = () => {

    return (
    <section id="welcome-section">
        <h1>Chris Bridgewater <br />
        <span className="titleSpan">Full Stack Web Developer</span>
        <br /><span className="titleSpan2">MERN / Java / Python / C#</span>
        </h1>
        <a id="link-to-contact" href="#contact-section">Contact me</a>
        <a id="link-to-projects" href="#projects"><i className="fa-solid fa-angle-down fa-bounce fa-2xl" style={{color:"#eb6028"}}></i></a>
    </section>
    )
}

export default Welcome