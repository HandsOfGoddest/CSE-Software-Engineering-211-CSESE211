import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsOfCate } from "../actions/brandActions";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import Advertisement from "./Advertisement";
import Cate from "./Cate";
import { listCate } from "../actions/brandActions";
function AfterPickCategory({ match }) {
  const dispatch = useDispatch();
  const productsListOfCate = useSelector((state) => state.productsListOfCate);
  const { productsOfCate } = productsListOfCate;
  const cateList = useSelector((state) => state.cateList);
  const { categoryList } = cateList;

  useEffect(() => {
    dispatch(
      listProductsOfCate(match.params.pathName, match.params.catePathName)
    );
    dispatch(listCate(match.params.pathName));
  }, [dispatch, match]);
  return (
    <>
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
        {productsOfCate &&
          productsOfCate.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </div>
          </div>
    </>
  );
}

export default AfterPickCategory;
