import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductsOfBrand } from "../actions/brandActions";
import Product from "./Product";
import { Link } from "react-router-dom";
import Advertisement from "./Advertisement";
import Cate from "./Cate";
import { listCate } from "../actions/brandActions";

function Hello({ match }) {
  const dispatch = useDispatch();
  const productListOfBrand = useSelector(
    (state) => state.productListOfBrand || {}
  );
  const { ProductsOfBrand } = productListOfBrand; //Now list is in listProductOfBrand

  const cateList = useSelector((state) => state.cateList);
  const { categoryList } = cateList;

  useEffect(() => {
    dispatch(listProductsOfBrand(match.params.pathName));

    dispatch(listCate(match.params.pathName));
  }, [dispatch, match]);

  return (
    <>
      <Advertisement />

      <div id="food-list">
        {(categoryList || []).map((cate) => (
          <div key={cate._id}>
            <Cate cate={cate} />
          </div>
        ))}
      </div>

      <div id="food-list">
        {ProductsOfBrand.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </div>
    </>
  );
}

export default Hello;
