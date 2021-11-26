import React, { useEffect } from "react";
import "./HomeScreenStyle.css";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Advertisement from "../components/Advertisement";
//import Category from "../components/Category";
import ListBrand from "../components/ListBrand";
import { listProducts } from "../actions/productActions";
import Hello from "../components/getListProductOfBrand";


const HomeScreen = () => {
  
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList || {});

  const { loading, error, products } = productList;
  
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
 

  return (
    <>
      
      {/* <Category />*/}
      <ListBrand />
     
      
    </>
  );
};

export default HomeScreen;
