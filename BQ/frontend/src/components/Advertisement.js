import React from "react";
import { Carousel } from "react-bootstrap";
import "./MyStyle.css";
const Advertisement = () => {
  return (
    <>
      <div className="best-sale">
        <div className="best-sale-container">
          <div className="qsc">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src="images/qc1.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="images/qc2.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/qc3.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/qc4.png"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
