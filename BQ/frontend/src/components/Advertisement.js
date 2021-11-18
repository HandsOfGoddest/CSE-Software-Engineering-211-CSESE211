import React from "react";
import { Carousel } from "react-bootstrap";
import "./MyStyle.css";
const Advertisement = () => {
  return (
    <div className="best-sale">
      <div className="best-sale-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="qc" src="images/qc1.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="qc"
              src="images/qc2.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="qc" src="images/qc3.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="qc" src="images/qc4.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Advertisement;
