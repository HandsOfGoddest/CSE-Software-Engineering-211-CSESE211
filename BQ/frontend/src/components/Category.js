import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";

const Category = () => {
  return (
    <div className="content">
      <div className="prefer">
        <p>Bạn thích gì nèo :3</p>

        <div className="select-prefer-foods">
          <div className="select-prefer-food">
            <Link to={``}>
              <img src="/images/cate_favourite.png " />
            </Link>

            <Link to={``}>
              <strong>Best seller</strong>
            </Link>
          </div>
          <div className="select-prefer-food">
            <Link to={``}>
              <img src="/images/cg_coffee_web.png " />
            </Link>

            <Link to={``}>
              <strong>Cà phê</strong>
            </Link>
          </div>
          <div className="select-prefer-food">
            <Link to={``}>
              <img src="/images/cg_frappu_web.png" />
            </Link>

            <Link to={``}>
              <strong>Trà/Trà sữa</strong>
            </Link>
          </div>
          <div className="select-prefer-food">
            <Link to={``}>
              <img src="/images/cg_tea_milk_tea_web.png " />
            </Link>

            <Link to={``}>
              <strong>Đá xay</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
