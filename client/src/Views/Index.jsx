import Contact from "../Components/ContactComponents/ContactComponent/Contact";
import Footer from "../Components/FooterComponents/Footer";
import Navbar from "../Components/NavbarComponents/Navbar";
import Projects from "../Components/ProjectsCompontents/Projects";
import Welcome from "../Components/WelcomeComponents/Welcome";
import '../App.css';


const Index = () => {

    return(
        <div>
        <Navbar/>
        <Welcome/>
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
    )
}

export default Index;