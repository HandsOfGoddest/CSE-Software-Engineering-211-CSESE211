import React from "react";
import { Link } from 'react-router-dom';
import AfterPickCategory from './getListProductByCategoryOfBrand';
import "./MyStyle.css"

const Cate= ({ cate}) => {
  return (
      <Link  className="categ" to={`/brand/${cate.brandName}/list_product_sort_by/${cate.catePathName}`}>
        <img className="categ-image" src={cate.image} variant="top" />
        <div className="categ-name">
            <strong>{cate.cateName}</strong>
          </div>
      </Link>
  );
};

export default Cate;