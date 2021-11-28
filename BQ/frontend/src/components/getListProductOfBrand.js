import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProductsOfBrand } from "../actions/brandActions";
import Product from "./Product";
import Advertisement from "./Advertisement";
import Cate from "./Cate";
import { listCate } from "../actions/brandActions";

function Hello({ match }) {
  const dispatch = useDispatch();
  const productListOfBrand = useSelector((state) => state.productListOfBrand || {});
  const { ProductsOfBrand } = productListOfBrand; //Now list is in listProductOfBrand

  const cateList = useSelector((state) => state.cateList);
  const { categoryList } = cateList;

  console.log("hihi", ProductsOfBrand);

  useEffect(() => {
    dispatch(listProductsOfBrand(match.params.pathName));

    dispatch(listCate(match.params.pathName));
  }, [dispatch, match]);

  return (
    <div>
      <Advertisement />

      <div className="title-">
        <div id="food-title">
          {(categoryList || []).map((cate) => (
            <Cate cate={cate} />
          ))}
        </div>
      </div>
      <div className="food-overlay">
        <div id="food-list">
          {(ProductsOfBrand || []).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hello;
