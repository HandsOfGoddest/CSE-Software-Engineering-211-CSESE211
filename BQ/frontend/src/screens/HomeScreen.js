import React, { useEffect } from "react";
import "./HomeScreenStyle.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import ListBrand from "../components/ListBrand";
import { listProducts } from "../actions/productActions";
import Advertisement from "../components/Advertisement";

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
      <ListBrand />
    </>
  );
};

export default HomeScreen;
