import React from "react";
import { Link } from "react-router-dom";


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
              <p>Best seller</p>
            </Link>
          </div>
          <div className="select-prefer-food">
            <Link to={``}>
              <img src="/images/cg_coffee_web.png " />
            </Link>

            <Link to={``}>
              <p>Cà phê</p>
            </Link>
          </div>
          <div className="select-prefer-food">
            <Link to={``}>
              <img src="/images/cg_frappu_web.png" />
            </Link>

            <Link to={``}>
              <p>Trà/Trà sữa</p>
            </Link>
          </div>
          <div className="select-prefer-food">
            <Link to={``}>
              <img src="/images/cg_tea_milk_tea_web.png " />
            </Link>

            <Link to={``}>
              <p>Đá xay</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
