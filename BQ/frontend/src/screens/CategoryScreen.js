import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import { listBrands } from "../actions/brandActions";
import Brand from "../components/Brand";
import Product from "../components/Product";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const CategoryScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList || {});

  const { loading, error, products } = productList;

  const brandList = useSelector((state) => state.brandList || {});

  const { brands } = brandList;

  useEffect(() => {
    //dispatch(listProducts());
    dispatch(listBrands());
  }, [dispatch]);
  const element = <Welcome name="Sara" />;

  return (
    <>
      <div id="food-list">
        {brands.map((product) => (
          <div key={product._id}>
            <Brand brand={product} />
          </div>
        ))}
      </div>
     
    </>
     
  );
};

export default CategoryScreen;
