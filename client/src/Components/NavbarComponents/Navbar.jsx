import "./Navbar.css"

const Navbar = () => {

    return (
    <nav id="navbar">
            <ul>
            <li><a className="section-link" href="#welcome-section"><span className="desktop-only"><i className="fas fa-chevron-right"></i></span>Welcome</a></li>
            <li><a className="section-link" href="#projects"><span className="desktop-only"><i className="fas fa-chevron-right"></i></span>Projects</a></li>
            <li><a className="section-link" href="#contact-section"><span className="desktop-only"><i className="fas fa-chevron-right"></i></span>Contact</a></li>
        </ul>
    </nav>
    )
}

export default Navbar