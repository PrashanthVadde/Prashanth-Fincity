import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import "./index.css"
import Navbar from "../Navbar";

const ContactUs = () => (
    <>
        <Navbar />
        <div className="contact-us">
            <div className="icons-container">
                <RiInstagramFill size={40} style={{marginRight: 20}}/>
                <FaLinkedin size={40} style={{marginRight: 20}} />
                <IoIosMail size={50} />
            </div>
            <p className="contact-us-text">Copyright © 2024.  All rights reserved</p>
        </div>
    </>
    
)

export default ContactUs