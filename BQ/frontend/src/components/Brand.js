import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./MyStyle.css";

const Brand = ({ brand }) => {

  return (
    //
    <>
      <Link to ={`brand/${brand.pathName}/list_product`}>
        <img className="product-image" src={brand.image} variant="top" />
      </Link>
      <div className="product-name">
        <strong>{brand.brandName}</strong>
      </div>
    </>
  );
};

export default Brand;
