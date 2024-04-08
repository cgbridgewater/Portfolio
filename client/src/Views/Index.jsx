import { useEffect } from "react";
import Contact from "../Components/ContactComponents/ContactComponent/Contact";
import Footer from "../Components/FooterComponents/Footer";
import Navbar from "../Components/NavbarComponents/Navbar";
import Projects from "../Components/ProjectsCompontents/Projects";
import Welcome from "../Components/WelcomeComponents/Welcome";
import '../App.css';


const Index = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])


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