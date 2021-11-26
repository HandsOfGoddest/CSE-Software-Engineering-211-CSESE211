import React from "react";
import { Link } from 'react-router-dom';
import AfterPickCategory from './getListProductByCategoryOfBrand';
import "./MyStyle.css"

const Cate= ({ cate}) => {
  return (
    <>
      <Link to={`/brand/${cate.brandName}/list_product_sort_by/${cate.catePathName}`}>
        <img className="product-image" src={cate.image} variant="top" />
      </Link>
      <div className="product-name">
            <strong>{cate.cateName}</strong>
          </div>
       </>
  );
};

export default Cate;