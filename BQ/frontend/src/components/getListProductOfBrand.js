import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductsOfBrand } from "../actions/brandActions";
import Product from "./Product";

const Hello = ({ match }) => {
  
  const dispatch = useDispatch();
  const productListOfBrand = useSelector((state) => state.productListOfBrand);
  const { ProductsOfBrand } = productListOfBrand; //Now list is in listProductOfBrand
  useEffect(() => {
    dispatch(listProductsOfBrand(match.params.pathName));
  }, [dispatch]);
  console.log("hello",ProductsOfBrand);
  return (
    <div>
      <Row>
        {(ProductsOfBrand || []).map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Hello;
