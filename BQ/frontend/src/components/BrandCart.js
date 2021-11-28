import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./MyStyle.css";

const BrandCart = ({ brand }) => {

  return (
    //
    <div className="brand-info" >
      <Link to ={`/${brand.brandName}/cart`}>
        <img className="brand-image" src={brand.image} variant="top" />
      </Link>
      <div className="brand-name">
        <strong>{brand.brandName}</strong>
      </div>
    </div>
  );
};

export default BrandCart;
