import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./AboutMeModal.css"
const bikes = require(`../../../Assets/Images/bikes.jpg`);

const AboutMeModal = () =>{
    const [showAboutMe, setShowAboutMe] = useState(false);
    const handleCloseAboutMe = () => setShowAboutMe(false);
    const handleShowAboutMe = () => setShowAboutMe(true);

    return(
        // container
        <div>
            {/* link to trigger modal */}
            <li><a href="#AboutMe" variant="primary" onClick={handleShowAboutMe}><i className="fa-solid fa-user" style={{color:"#EB6028"}}></i>About Me</a></li>
            {/* modal start */}
            <Modal 
                className="aboutMeModal"
                show={showAboutMe} onHide={handleCloseAboutMe}
                size="lg"
                fullscreen={false}
                scrollable={true}
                centered
                >
                <Modal.Header
                    closeButton closeVariant="white" style={{height:"60px", background:"#403E3A", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028",borderTop:"2px solid #EB6028"}}
                >
                    <Modal.Title ><h1 style={{color:"#FFFBF0"}} className="name m-0"><b><em>About</em> Chris Bridgewater</b></h1>
                    </Modal.Title>
                </Modal.Header>
                {/* Modal Body - Content */}
                <Modal.Body className="modalBody"  style={{backgroundColor:"#FFFBF0", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028"}}>
                    {/* About Me Content */}
                    <div className="content">
                        <div className="left-side">
                            <h3>Hi, I'm Chris,</h3>
                            <p>After 15 years of traveling as a process specialist, I decided to transition into the tech world to allow me to be closer to the ones I love.</p>
                            <p>In early 2023, I said, "Hello World!" when I graduated from Coding Dojo as a "Triple Black Belt" web developer, gaining the school's highest honors in Python, JavaScript (MERN/React.js), and Java. Since then, I have continued learning by teaching myself C# and dabbling in Unity.</p>
                        </div>
                        <div className="ride-side desktop">
                            <img className="bikes" src={bikes} alt="riding bikes" />
                        </div>
                    </div>
                    <p>When I'm not coding, you can find my wife and I enjoying the Oregon outdoors while mountain biking, hiking, or skiing. But there is always time for the occasional lazy Sunday with the puppies.</p>
                    <p>Want to get in touch? Check out my "Email Me" section and send me a message!</p>
                    <div className="ride-side phone">
                        <img className="bikes" src={bikes} alt="riding bikes" />
                    </div>
                </Modal.Body>
                {/* End Modal Body - Content */}
                <Modal.Footer style={{height:"60px", background:"#403E3A",borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028",borderBottom:"2px solid #EB6028", display:"flex",justifyContent:"end", alignContent:"center"}}>
                {/* CLOSE BUTTON */}
                    <Button style={{background:"#FFFBF0",color:"#403E3A", border:"2.25px solid #EB6028", fontWeight:800}} onClick={handleCloseAboutMe}>
                        CLOSE
                    </Button>
                {/* END CLOSE BUTTON */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AboutMeModal