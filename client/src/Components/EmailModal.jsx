import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import "../EmailModal.css";

const Email = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[ name, setName ] = useState("");
    // const[ email, setEmail ] = useState("");
    // const[ message, setMessage ] = useState("");




    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(name)
    //     console.log(email)
    //     console.log(message)
        



    // }
    



    return (    

        <div>

            <li><a href="#modal" onClick={handleShow}><i className="fas fa-envelope"></i>Email</a></li>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header
                    closeButton style={{background:"#403E3A", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028",borderTop:"2px solid #EB6028"}}
                >
                <Modal.Title ><h3 id="emailTitle" style={{color:"#FFFBF0"}} className="p-2 m-0"><b>Contact <em>Chris Bridgewater</em></b></h3></Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody"  style={{backgroundColor:"#FFFBF0", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028"}}>            
                    <h6 id="emailText">Leave me an email and message or email me directly at <a href="mailto:cgbridgewater@outlook.com?subject=Web Development Contact">cgbridgewater@outlook.com</a></h6>

                    <form  id="contactForm" action="https://formsubmit.co/50d48d6985684d090321d05f01e08d9a" method="POST">
                        <input type="hidden" name="_next" value="http://localhost:3000/"/>
                        <input type="hidden" name="_template" value="box"/>
                        <input type="hidden" name="_subject" value={`New email from ${name}`}/>
                        <input type="hidden" name="_captcha" value="false"/>

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

                        <label htmlFor="email" id="emailLabel">
                            Email
                        </label>
                        <br />
                        <input
                        id="emailInput"
                        type="email"
                        placeholder="Provide your email" 
                        name="email"
                        required
                        />

                        <br />

                        <label htmlFor="message" id="messageLabel">
                            Message
                        </label>
                        <br />
                        <textarea 
                        id="messageInput"
                        placeholder="Leave me a message"
                        rows="3"  
                        name="message"
                        required
                        ></textarea>
                        <button id="emailButton" type="submit">Send</button>
                    </form>
                <p id="result-text"></p>
                </Modal.Body>
                <Modal.Footer style={{height:"50px", background:"#403E3A", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028",borderBottom:"2px solid #EB6028", display:"flex",justifyContent:"end"}}>
                </Modal.Footer>
            </Modal>

        </div>

    )

}

export default Email