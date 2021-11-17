import React, { useEffect } from "react";
import './HomeScreenStyles.css'
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Row, Col } from "react-bootstrap";
import Advertisement from "../components/Advertisement";
import Category from "../components/Category";
import { listProducts } from "../actions/productActions";


const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <html>
    <body>
      <Advertisement />
      <Row>
        <Col>
          <Category />
        </Col>
      </Row>
      <h1>Cà phê</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant = 'danger'>{error}</Message>
      ) : (
        <Row>
          {(products).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </body>
    </html>
  );
};

export default HomeScreen;
