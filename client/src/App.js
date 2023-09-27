import Navbar from './Components/NavbarComponents/Navbar';
import Welcome from './Components/WelcomeComponents/Welcome';
import Projects from "./Components/ProjectsCompontents/Projects";
import Contact from './Components/ContactComponents/ContactComponent/Contact';
import Footer from './Components/FooterComponents/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="main-container">
        <Navbar/>
        <Welcome/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
