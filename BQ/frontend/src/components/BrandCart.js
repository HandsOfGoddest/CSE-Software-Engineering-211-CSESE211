import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./MyStyle.css";

const BrandCart = ({ brand }) => {

  return (
    //
    < >
      <Link to ={`/${brand.brandName}/cart`}>
        <img className="product-image" src={brand.image} variant="top" />
      </Link>
      <div className="product-name">
        <strong>{brand.brandName}</strong>
      </div>
    </>
  );
};

export default BrandCart;
