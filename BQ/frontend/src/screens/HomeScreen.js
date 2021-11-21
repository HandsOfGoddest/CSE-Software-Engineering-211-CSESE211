import React, { useEffect } from "react";
import "./HomeScreenStyle.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Row, Col } from "react-bootstrap";
import Advertisement from "../components/Advertisement";
import Category from "../components/Category";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList || {});

  const { loading, error, products } = productList;
  
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Advertisement />
      <Category />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div id="food-list">
          {products.map((product) => (
            <div key={product._id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
