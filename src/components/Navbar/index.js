import { Link } from "react-router-dom"

import "./index.css"

const Navbar = () => (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="small-device-nav-bar">
            <Link to={"/"} style={{textDecoration: "none"}}>
                <h1 className="person-name">Prashanth Vadde</h1>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <p className="option">About</p>
                    </Link>

                    <Link to={"/projects"} style={{textDecoration: "none"}}>
                        <p className="option">Projects</p>
                    </Link>

                    
                    <Link to={"/contact-us"} style={{textDecoration: "none"}}>
                        <p className="option">Contacts</p>
                    </Link>

                </div>
            </div>
        </nav>


    
        <div className="nav-bar">
            <Link to={"/"} style={{textDecoration: "none"}}>
                <h1 className="person-name">Prashanth Vadde</h1>
            </Link>
            
            <div className="nav-bar-options">
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <p className="option">About</p>
                </Link>

                <Link to={"/projects"} style={{textDecoration: "none"}}>
                    <p className="option">Projects</p>
                </Link>

                <Link to={"/contact-us"} style={{textDecoration: "none"}}>
                    <p className="option">Contacts</p>
                </Link>
            </div>
        </div>
    </>
)

export default Navbar