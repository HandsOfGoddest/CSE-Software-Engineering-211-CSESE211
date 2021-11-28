import React from "react";
import './MyStyle.css'
//import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
    return (
        // <div className="footer">
        //     <div className="contact">
        //         <p>Liên hệ với chúng tôi: </p>
        //         <img src="images/fb.png" alt="" />
        //         <img src="images/ig.png" alt="" />
        //     </div>
        // </div>
        <footer>
            <div className="contact" >
                <a href="https://www.facebook.com/hailinh.nguyen.359126/" role="button" ><i className="fab fa-facebook-f"  style={{ backgroundColor: "#3b5998" }} ></i></a>
                <a href="https://www.instagram.com/halee_4u_/" role="button" ><i className="fab fa-instagram" style={{ backgroundColor: "#CD486B" }}></i></a>
                <a href="https://github.com/HandsOfGoddest/CSE-Software-Engineering-211-CSESE211" role="button" ><i className="fab fa-github" style={{backgroundColor: "#333333"}}></i></a>
            </div>
            <div className="copyright">
                © 2021 Copyrights by Akatsuki
            </div>
        </footer>
    )
};

export default Footer;
