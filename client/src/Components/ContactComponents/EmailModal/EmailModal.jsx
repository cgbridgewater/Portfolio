import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./EmailModal.css";
import axios from "axios"

const Email = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[ name, setName ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ message, setMessage ] = useState("");
    const subject = `New email from ${name}`
    const captcha = false
    const template = "box"

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(message)
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post("https://formsubmit.co/ajax/cgbridgewater@outlook.com", {
            name:name,
            email:email,
            message:message,
            _subject:subject,
            _captcha:captcha,
            _template:template
        })
        .then( res => {
            console.log(res.data.message) 
            setName("")
            setEmail("")
            setMessage("")
            document.getElementById("result-text").innerText =
            `Email sent successfully! \nReturning to main page.`;
            setTimeout(handleClose, 2000)
        })
        .catch((err) => {
            console.log(err) 
            document.getElementById("result-text").innerText =
            "An error occured,"+ err;
        })
    }

    return (
        // outer container
        <div>
            {/* link on main page to trigger pop up */}
            <li><a href="#modal" onClick={handleShow}><i className="fas fa-envelope"></i>Email Me</a></li>
            {/* model */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header
                    closeButton closeVariant="white" style={{height:"60px", background:"#403E3A", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028", borderTop:"2px solid #EB6028"}}
                >
                <Modal.Title className="mo" ><h2 id="emailTitle" style={{color:"#FFFBF0"}} className="m-0"><b>Contact <em>Chris Bridgewater</em></b></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody"  style={{backgroundColor:"#FFFBF0", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028"}}>            
                    {/* model inner title */}
                    <h6 id="emailText">Leave me an email and message or email me directly at <a href="mailto:cgbridgewater@outlook.com?subject=Web Development Contact">cgbridgewater@outlook.com</a></h6>
                    {/* form */}
                    <form  id="contactForm" onSubmit={onSubmitHandler}>
                        {/* name section */}
                        <label htmlFor="name" id="nameLabel">
                            Name
                        </label>
                        <br />
                        <input
                        id="nameInput"
                        type="text"
                        placeholder="Provide your name" 
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        required
                        />
                        {/* end name section */}
                        {/* email section */}
                        <label htmlFor="email" id="emailLabel">
                            Email
                        </label>
                        <br />
                        <input
                        id="emailInput"
                        type="email"
                        placeholder="Provide your email" 
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        required
                        />
                        {/* end email section */}
                        {/* message section */}
                        <label htmlFor="message" id="messageLabel">
                            Message
                        </label>
                        <br />
                        <textarea 
                        id="messageInput"
                        placeholder="Leave me a message"
                        rows="3"  
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        ></textarea>
                        {/* end message section */}
                        {/* submit button */}
                        <button id="emailButton" type="submit">Send</button>
                        {/* end submit button */}
                    </form>
                <p id="result-text"></p>
                </Modal.Body>
                <Modal.Footer style={{height:"60px", background:"#403E3A", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028",borderBottom:"2px solid #EB6028", display:"flex",justifyContent:"end", alignContent:"center"}}>
                    {/* CLOSE BUTTON */}
                    <Button style={{background:"#FFFBF0",color:"#403E3A", border:"2.25px solid #EB6028", fontWeight:800}} onClick={handleClose}>
                        CLOSE
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Email