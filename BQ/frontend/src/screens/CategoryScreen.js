import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "../components/Product";

function CategoryScreen({ brandName }){
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList || {});

  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div id="food-list">
      {products
        .filter((item) => item.brandName === brandName)
        .map((product) => (
          <div div key={product.brandName}>
            <Product product={product} />
          </div>
        ))}
    </div>
  );
};
export default CategoryScreen;
