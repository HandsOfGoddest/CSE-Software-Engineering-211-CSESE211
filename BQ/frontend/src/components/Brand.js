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
  return (
    <Link to = {``}>
      <img className="product-image" src={brand.image} variant="top" />
    </Link>
  );
};

export default Brand;
