import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCate } from "../actions/brandActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Cate from "./Cate";

function ListCategory({ match }) {
  const dispatch = useDispatch();
  const cateList = useSelector((state) => state.cateList);
  const { loading, error, categoryList } = cateList;
  console.log("huhu", categoryList)
  useEffect(() => {
    dispatch(listCate(match.params.brandPathName));
  }, [dispatch]);


  
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div id="food-list">
          {(categoryList || []).map((cate) => (
            <div key={cate._id}>
              <Cate cate={cate}/>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ListCategory;
