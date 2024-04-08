import { Link } from "react-router-dom"
import "./Footer.css"

function Footer (){

    return(
    <div id="footer-container">
        <footer>
            <Link to="/origin">My Origin Story</Link>
            <p>Rev. 4/2024</p>
        </footer>
    </div>
    )
}

export default Footer