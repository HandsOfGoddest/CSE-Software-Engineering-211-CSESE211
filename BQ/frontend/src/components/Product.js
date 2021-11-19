import React from "react";
import {Link} from 'react-router-dom'
import { Card } from "react-bootstrap";
import Rating from './Rating'
import "./MyStyle.css"

const Product = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <img className="product-image" src={product.image} variant="top" />
      </Link>
        <Link to = {`/product/${product._id}`}>
          <div className="product-name">
            <strong>{product.name}</strong>
          </div>
        </Link>
        <div>
          <Rating value = {product.rating}
          text = {`${product.numReviews} reviews`}/>
        </div>
      <div className="product-price">{product.price/1000}.000 VND </div>
      </>
  );
};

export default Product;