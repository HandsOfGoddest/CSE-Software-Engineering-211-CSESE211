import React from "react";
import { Carousel } from "react-bootstrap";
import "./MyStyle.css";
const Advertisement = () => {
  return (
    <div className="best-sale">
      <div className="best-sale-container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074615/BQ/6_epapsm.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074049/BQ/qc1_gcoklt.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074616/BQ/3_loui6z.jpg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074615/BQ/1_tw65zp.png" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074057/BQ/qc4_fo8xzt.jpg" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="qc" src="https://res.cloudinary.com/vitamim/image/upload/v1638074616/BQ/6_zpqp75.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Advertisement;
