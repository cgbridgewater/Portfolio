import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Stack from 'react-bootstrap/Stack';
import "./Modal.css"

const ResumeModal = () =>{
    const [showResume, setShowResume] = useState(false);
    const handleCloseResume = () => setShowResume(false);
    const handleShowResume = () => setShowResume(true);

    return(
        // container
        <div>
            {/* link to trigger modal */}
            <li><a href="#Resume" variant="primary" onClick={handleShowResume}><i className="fas fa-file-alt" style={{color:"#EB6028"}}></i>Resume</a></li>
            {/* modal start */}
            <Modal 
                className="resumeModal"
                show={showResume} onHide={handleCloseResume}
                size="xl"
                fullscreen={false}
                scrollable={true}
                centered
                >
                <Modal.Header
                    closeButton closeVariant="white" style={{height:"60px", background:"#403E3A", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028",borderTop:"2px solid #EB6028"}}
                >
                <Modal.Title ><h1 style={{color:"#FFFBF0"}} className="name m-0"><b><em>Chris Bridgewater</em></b></h1>
                </Modal.Title>
                </Modal.Header>
                {/* Modal Body - Content */}
                <Modal.Body className="modalBody"  style={{backgroundColor:"#FFFBF0", borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028"}}>
                    {/* WEB DEV TITLE AND CONTACTS */}
                    <Stack direction="horizontal" gap={1}>
                        <h3 className="devTitle ps-2 mb-0" style={{color:"#EB6028"}}><b>FULL STACK DEVELOPER</b></h3>
                        <h5 className="h5Text pe-2 ms-auto text-end mb-0" style={{minWidth:"145px"}}>541-554-0520<span className="desktop-only"> | </span><span className="mobile-only"><br /></span>Creswell, OR</h5>
                    </Stack>
                    {/* EMAIL DESKTOP VIEW */}
                    <Stack className="desktop-only" direction="horizontal">
                        <h5 className="h5Text mt-0 pe-2 ms-auto text-start"><a href="mailto:cgbridgewater@outlook.com?subject=Web Development Contact">Email</a> | <a href="https://www.linkedin.com/in/chris-bridgewater" target="_blank" rel="noreferrer noopener">LinkedIn</a> | <a href="https://github.com/cgbridgewater" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                    </Stack>
                    {/* EMAIL PHONE VIEW */}
                    <Stack className="mobile-only" direction="horizontal">
                        <h5 className="h5Text mt-0  ms-auto text-center"><a href="mailto:cgbridgewater@outlook.com?subject=Web Development Contact">Email</a> | <a href="https://www.linkedin.com/in/chris-bridgewater" target="_blank" rel="noreferrer noopener">LinkedIn</a><span className="mobile-only"><br /></span><span className="desktop-only"> | </span><a href="https://github.com/cgbridgewater" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                    </Stack>
                    <hr style={{height:"5px", backgroundColor:"#403E3A"}} />
                    <br />
                    <h4 className="h4Header ps-2 ms-auto" style={{color:"#EB6028"}}><b>TECHNICAL SKILLS</b></h4>
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    {/* END WEB DEV TITLE AND CONTACTS */}
                    {/* TECH SKILLS DESKTOP VIEW */}
                    <Stack direction="horizontal" className="desktop-only" gap={1}>
                        <p className="pText ps-2 align-self-start"style={{width:"50%",minWidth:"215px",maxWidth:"630px"}}>
                            <b>Languages:</b> Java, JavaScript (ES6, Node.js), Python, C#, SQL, HTML5, CSS <br/>
                            <b>Frameworks/Libraries:</b> React.js, Express.js, Apache Tomcat, .NET, ASP.NET Core, Entity Framework Core, MVC, Flask, Bootstrap, Paypal
                        </p>
                        <p className="pText ps-2 pe-2 ms-auto ">&nbsp;</p>
                        <div className="vr"/>
                        <p className="pText pe-3 align-self-start text-start" style={{width:"50%", minWidth:"215px", maxWidth:"415px"}}>
                            <b>DataBases:</b> MySQL, NoSQL, MongoDB <br />
                            <b>Tools:</b> JSON - REST, API, Socket.io, Bcrypt, JPA ORM, VS-Code, Eclipse, Postman, AWS, MySQL Workbench, Razor, LINQ
                        </p>
                    </Stack>
                    {/* END TECH SKILLS DESKTOP VIEW */}
                    {/* TECH SKILLS MOBILE VIEW */}
                    <Stack direction="vertical" className="mobile-only">
                        <p className="pText ps-2 align-self-start">
                            <b>Languages:</b> Java, JavaScript (ES6, Node.js), <br/>Python, C#, SQL, HTML5, CSS <br/>
                            <br/>
                            <b>Frameworks/Libraries:</b> React.js, Express.js, <br/>Apache Tomcat, Flask, MVC, .NET, ASP.NET Core, <br />Entity Framework Core, Bootstrap, PayPal
                        </p>
                        <br />
                        <p className="pText ps-2 align-self-start text-start">
                            <b>DataBases:</b> MySQL, NoSQL, MongoDB <br/>
                            <br/>
                            <b>Tools:</b> JSON - REST, API, Socket.io, Bcrypt, JPA ORM, VS-Code, Eclipse, Postman, AWS, MySQL Workbench, Razor, LINQ
                        </p>
                    </Stack>
                    {/* END TECH SKILLS MOBILE VIEW */}
                    <br />
                    {/* PROJECT SECTION */}
                    <h4 className="h4Header ps-2 ms-auto" style={{color:"#EB6028"}}><b>SOFTWARE PROJECTS</b></h4>

                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    {/* START PROJECT MANAGER */}
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start " style={{minWidth:"140px"}}><b>The Project Board</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span><a href="https://github.com/cgbridgewater/Java/tree/main/Java%20Spring/project_manager" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                        <h5 className="h5Text pe-2 ms-auto text-end">Tech Stack:<span className="mobile-only"><br/></span> Java / SpringBoot / MySQL</h5>
                    </Stack>
                    <h5 className="h5Text p-2"><em className="h5Text p-2" >A management system to help users reach project goals before their deadlines.</em></h5>
                    <ul style={{width:"75%"}}>
                        <li>
                            <p className="pText">Created an app to provide users with the ability to create projects, add tasks to the projects and join other projects while tracking the due dates</p>
                        </li>
                        <li>
                            <p className="pText">Developed a login / registration system via MySQL database utilizing RegEx, validations, Bcrypt and hashing passwords</p>
                        </li>
                        <li>
                            <p className="pText">Primary focus was on backend design and functionality. Utilizing custom queries and OOP principals to manipulate and retrieve data effectively</p>
                        </li>
                    </ul>
                    {/* END GET PROJECT MANAGER */}


                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    {/* START GETOUTSIDE */}
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start " style={{minWidth:"140px"}}><b>Get Outside</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span><a href="http://54.201.23.108/getoutside" target="_blank" rel="noreferrer noopener">Live</a> | <a href="https://github.com/cgbridgewater/getOUTSIDE" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                        <h5 className="h5Text pe-2 ms-auto text-end">Tech Stack:<span className="mobile-only"><br/></span> Python / Flask / MySQL</h5>
                    </Stack>
                    <h5 className="h5Text p-2"><em className="h5Text p-2" >A web app that enables users to plan and coordinate activities with geo-location functionality.</em></h5>
                    <ul style={{width:"75%"}}>
                        <li>
                            <p className="pText">Developed a login / registration system via MySQL database, utilizing RegEx, validations, Bcrypt and hashing passwords.</p>
                        </li>
                        <li>
                            <p className="pText">Created and linked one-to-many and many-to-many models using MySQL enabling users to create events, join events, add comments and follow friends.</p>
                        </li>
                        <li>
                            <p className="pText">Created a user image upload without use of a helper tool and integrated the Google Maps API to display activity locations.</p>
                        </li>
                        <li>
                            <p className="pText">Implemented a responsive design for optimized viewing across multiple devices and screen sizes including phones.</p>
                        </li>
                    </ul>
                    {/* END GET OUTSIDE */}
                    {/* START CANDY SHOP */}
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start" style={{minWidth:"140px"}}><b>Candy Shop</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span><a href="http://52.33.105.171/" target="_blank" rel="noreferrer noopener">Live</a> | <a href="https://github.com/cgbridgewater/candy_shop" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                        <h5 className="h5Text pe-2 ms-auto text-end">Tech Stack:<span className="mobile-only"><br/></span> MongoDB, Express, React, Node</h5>
                    </Stack>
                    <h5 className="h5Text p-2"><em className="h5Text p-2">An e-commerce app for online sale of candy.</em></h5>
                    <ul style={{width:"75%"}}>
                        <li>
                            <p className="pText">Collaborated with team members remotely via GitHub and Zoom. Coordinated daily code review, paired code review sessions
                            and project timeline review.</p>
                        </li>
                        <li>
                            <p className="pText">Owned backend and database design and development, along with PayPal API integration.
                            Assisted with frontend development and styling when needed.</p>
                        </li>
                        <li>
                            <p className="pText">Implemented an admin login / registration system via MongoDB with; validations, Bcrypt and hashing passwords to secure user information.</p>
                        </li>
                        <li>
                            <p className="pText">Created admin pages to create and update candy items, including inventory and sale functions.</p>
                        </li>
                        <li>
                            <p className="pText">Leveraged a single-page app using React.js with features such as custom on page sorting and filtering, pagination, animations
                            and sounds for an interactive user experience.</p>
                        </li>
                        <li>
                            <p className="pText">Used context and local storage to optimize cart functionality and persist cart content memory.</p>
                        </li>
                        <li>
                            <p className="pText">Integrated PayPal API to process payments with fully functional PayPal and credit card payments.</p>
                        </li>
                    </ul>
                    {/* END CANDY SHOP */}
                    {/* START PET SHELTER */}
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start" style={{minWidth:"140px"}}><b>Pet Shelter</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span><a href="http://34.218.236.175/" target="_blank" rel="noreferrer noopener">Live</a> | <a href="https://github.com/cgbridgewater/Project_Pet_Shelter" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                        <h5 className="h5Text pe-2 ms-auto text-end">Tech Stack:<span className="mobile-only"><br/></span> MongoDB, Express, React, Node</h5>
                    </Stack>
                    <h5 className="h5Text p-2"><em className="h5Text p-2">A fictitious website of a pet shelter.</em></h5>
                    <ul style={{width:"75%"}}>
                        <li>
                            <p className="pText">Implemented a staff login / registration system with MongoDB with; validations, Bcrypt and hashing passwords to secure user.
                            information.</p>
                        </li>
                        <li>
                            <p className="pText">Developed staff pages, allowing staff to create, update and delete pet listings and fundraising events from the site. Along with viewing submitted adoption requests.</p>
                        </li>
                        <li>
                            <p className="pText">Integrated APIs from Google Maps to display shelter locations and display GitHub data.</p>
                        </li>
                        <li>
                            <p className="pText">Developed a interactive UI utilizing the React.js single-page ability. Using features such as custom on page sorting, filtering, pop-up forms, clickable/on-hover animations and page loading animations, while ensuring viewing is optimized for all screen sizes with a responsive page layout.</p>
                        </li>
                    </ul>
                    {/* END PETSHELTER */}
                    {/* START FIREBALL */}
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start" style={{minWidth:"140px"}}><b>FireBall</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span><a href="https://fireballdata.vercel.app/" target="_blank" rel="noreferrer noopener">Live</a> | <a href="https://github.com/chingu-voyages/v45-tier2-team-23" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                        <h5 className="h5Text pe-2 ms-auto text-end">Tech Stack:<span className="mobile-only"><br/></span>React with Next.js</h5>
                    </Stack>
                    <h5 className="h5Text p-2"><em className="h5Text p-2">A Chingu group project to view Nasa API data with customizable search and various interactive visualizations.</em></h5>
                    <ul style={{width:"75%"}}>
                        <li>
                            <p className="pText">Collaborated with team members remotely via GitHub, Discord and Zoom. Held scrum meetings twice a week for sprint planning, review and refining backlog tasks.</p>
                        </li>
                        <li>
                            <p className="pText">Participated in paired coding sessions to improve coding time and ensure continuity and cohesion.</p>
                        </li>
                        <li>
                            <p className="pText">Implemented search inputs, filter sliders and sort tabs to manipulate Nasa API data being displayed to give the user an interactive experience across the website.</p>
                        </li>
                        <li>
                            <p className="pText">Utilized Chart.js bar graph displays to represent responsive data based on query results.</p>
                        </li>
                        <li>
                            <p className="pText">A reactive choropleth mapping system was created with D3 to visually represent metrics for meteorite strikes or average mass.</p>
                        </li>
                        <li>
                            <p className="pText">The view table was used to display selectable rows, sorting and pagination of API data</p>
                        </li>
                        <li>
                            <p className="pText">Deployment was done with Vercel.</p>
                        </li>
                    </ul>
                    {/* END FIREBALL */}
                    {/* START TETRIS */}
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start" style={{minWidth:"140px"}}><b>Ninja Blocks</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span><a href="http://35.88.143.101/" target="_blank" rel="noreferrer noopener">Live</a> | <a href="https://github.com/cgbridgewater/MyTetris" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                        <h5 className="h5Text pe-2 ms-auto align-self-start text-end">Tech Stack:<span className="mobile-only"><br/></span> React.js</h5>
                    </Stack>
                    <h5 className="h5Text p-2"><em className="h5Text p-2">A Tetris inspired single player game created for desktop use</em></h5>
                    <ul style={{width:"75%"}}>
                        <li>
                            <p className="pText">Architected a single page app using React.js</p>
                        </li>
                        <li>
                            <p className="pText">Adopted the Tetris game design, creating animations, scoring and pace control</p>
                        </li>
                    </ul>
                    {/* END TETRIS */}
                    {/* START DRAW IT! */}
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start" style={{minWidth:"140px"}}><b>Draw It!</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span><a href="http://52.38.15.176/" target="_blank" rel="noreferrer noopener">Live</a> | <a href="https://github.com/cgbridgewater/DrawIt" target="_blank" rel="noreferrer noopener">GitHub</a></h5>
                        <h5 className="h5Text pe-2 ms-auto text-end align-self-start">Tech Stack:<span className="mobile-only"><br/></span> React.js</h5>
                    </Stack>
                    <h5 className="h5Text p-2"><em className="h5Text p-2">A memory-based drawing challenge</em></h5>
                    <ul style={{width:"75%"}}>
                        <li>
                            <p className="pText">Developed a single page app using React.js</p>
                        </li>
                        <li>
                            <p className="pText">Created a paintbrush canvas allowing users to draw logos that are displayed</p>
                        </li>
                        <li>
                            <p className="pText">Integrated desktop and phone versions to optimize UI based on the device used</p>
                        </li>
                    </ul>
                    {/* END PROJECT SECTION */}
                    <br />
                    {/* WORK EXPERIENCE SECTION */}
                    <h4 className="h4Header ps-2 ms-auto" style={{color:"#EB6028"}}><b>PROFESSIONAL EXPERIENCE</b></h4>
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    {/* START VALMET */}
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2"><b>Valmet Automation</b><span className="mobile-only"><br/></span><span className="desktop-only"> | </span>Sr. Process Specialist & Field Service</h5>
                        <h5 className="h5Text pe-2 ms-auto align-self-start text-end">Duluth, GA (NA Division)<span className="desktop-only"> | </span><span className="mobile-only"><br /></span>2008-2023</h5>
                    </Stack>
                    <ul>
                        <li>
                            <p className="pText"><b>New Projects -</b> Led and tracked new projects ranging in costs of $50k-1M, led kickoff meetings, managed installation phase,
                            provided startup and calibration services, handled customers project satisfaction and expectations for achieving ROI on product, follow-up on
                            performance and assisted in selling maintenance contracts on project close.</p>
                        </li>
                        <li>
                            <p className="pText"><b>North America Product Champion -</b> NA lead specialist on major products, working directly with Finland designers. Provided leadership and support in North America on key products. Including internal and remote support along with assisting troubleshooting our products across NA. Created and led high level training for customers sites and internal staff across North America. Developed custom documentation and material as needed. </p>
                        </li>
                        <li>
                            <p className="pText"><b>Troubleshooting Expert -</b> Onsite and remotely troubleshoot automated machinery, software, Linux systems and small electronics. This incuded analyzing customers process problem solving to create a solution. Generated documentation and led meetings on findings and resolutions</p>
                        </li>
                        <li>
                            <p className="pText"><b>Manage 15 Customer Accounts -</b> Service and Parts tracking,ROI, continuous communication to ensure service agreement is suited for customers needs</p>
                        </li>
                        <li>
                            <p className="pText"><b>Site Planning -</b> Plan and led monthly on-site meetings, planning for multiple customer sites including; staffing and parts for annual outages, routine maintenance, along with coordinating and providing specialty training.</p>
                        </li>
                        <li>
                            <p className="pText"><b>Product Maintenance -</b> Conducting routine preventative maintenance, product support and optimization of operation.</p>
                        </li>
                    </ul>
                    {/* END VALMET */}
                    {/* END WORK EXPERIENCE SECTION */}
                    <br />
                    {/* EDUCATION SECTION */}
                    <h4 className="h4Header ps-2 ms-auto" style={{color:"#EB6028"}}><b>EDUCATION</b></h4>
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    {/* START JPMC */}
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start"><b>JPMorgan Chase & Co. Software Engineering Lite Virtual Experience Program</b><span className="mobile-only"><br /></span></h5>
                        <h5 className="h5Text pe-2 ms-auto align-self-start text-end">Online<span className="desktop-only"> | </span><span className="mobile-only"><br /></span>2023</h5>
                    </Stack>
                    <ul>
                        <li>
                            <p className="pText">Completed a simulation focused on the process of completing an engineering ticket for a system in the credit-card rewards department of JPMorgan Chase & Co.</p>
                        </li>
                        <li>
                            <p className="pText">Created a new class to get existing system up and running</p>
                        </li>
                        <li>
                            <p className="pText">Wrote a test suite for the class added</p>
                        </li>
                    </ul>
                    {/* END JPMC */}
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    {/* START CODING DOJO */}
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start"><b>Coding Dojo</b><span className="mobile-only"><br /></span><span className="desktop-only"> | </span>Full Stack Coding Bootcamp</h5>
                        <h5 className="h5Text pe-2 ms-auto align-self-start text-end">Online<span className="desktop-only"> | </span><span className="mobile-only"><br /></span>2022-2023</h5>
                    </Stack>
                    <ul>
                        <li>
                            <p className="pText">Achieved <b><em>"Triple Black Belt"</em></b> across 3 intensive exams, demonstrating Coding Dojo's highest knowledge level</p>
                        </li>
                        <li>
                            <p className="pText">Intensive 32 weeks, 25-40 hrs. per week of coding, research, pair programing, SDLC development and algorithms</p>
                        </li>
                    </ul>
                    {/* END CODING DOJO */}
                    {/* START PERRY TECH */}
                    <hr style={{height:"2px", backgroundColor:"#403E3A"}} />
                    <Stack direction="horizontal" gap={3}>
                        <h5 className="h5Text ps-2 align-self-start"><b>Perry Technical Institute</b><span className="mobile-only"><br /></span><span className="desktop-only"> | </span>Instrumentation</h5>
                        <h5 className="h5Text pe-2 ms-auto align-self-start text-end">Yakima, WA<span className="desktop-only"> | </span><span className="mobile-only"><br /></span>2006-2008</h5>
                    </Stack>
                    <ul>
                        <li>
                            <p className="pText">Certificate for Instrumentation & Industrial Automation Technology including Programmable Logic Controllers,
                            Distributed Control Systems, loop logic controls, physics, calculus and analytic geometry</p>
                        </li>
                    </ul>
                    {/* END PERRY TECH */}
                {/* END EDUCATION SECTION */}
                </Modal.Body>
                {/* End Modal Body - Content */}
                <Modal.Footer style={{height:"60px", background:"#403E3A",borderLeft:"2px solid #EB6028", borderRight:"2px solid #EB6028",borderBottom:"2px solid #EB6028", display:"flex",justifyContent:"end", alignContent:"center"}}>
                {/* CLOSE BUTTON */}
                <Button style={{background:"#FFFBF0",color:"#403E3A", border:"2.25px solid #EB6028", fontWeight:800}} onClick={handleCloseResume}>
                    CLOSE
                </Button>
                {/* END CLOSE BUTTON */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ResumeModal