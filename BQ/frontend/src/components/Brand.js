import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import "./MyStyle.css";

const Brand = ({ brand }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList || {});

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <img className="product-image" src={brand.image} variant="top" />
    </>
  );
};

export default Brand;
