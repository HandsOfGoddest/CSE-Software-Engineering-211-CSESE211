import React from "react";
import './MyStyle.css'
//import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
 return(
            <div className="footer">
                <div className="contact">
                    <p>Liên hệ với chúng tôi: </p>
                    <img src="images/fb.png" alt="" />
                    <img src="images/ig.png" alt="" />
                </div>
            </div>
        )
  /*<footer>
  <Container>
      <Row>
          <Col className="text-center py-3">
                BQ-BAN DO AN
          </Col>
      </Row>
  </Container>
  </footer>;*/

};

export default Footer;
