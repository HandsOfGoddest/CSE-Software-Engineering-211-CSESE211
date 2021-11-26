import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listBrands } from "../actions/brandActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Brand from "../components/Brand";
import "./MyStyle.css";





function ListBrand() {
  const dispatch = useDispatch();
  const brandList = useSelector((state) => state.brandList || {});
  const { loading, error, brands } = brandList;
  useEffect(() => {
    dispatch(listBrands());
  }, [dispatch]);


  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div id="food-list">
          {(brands || []).map((brand) => (
            <div key={brand._id}>
              <Brand brand={brand} />
            </div>
          ))}
        </div>
      )}

    </>
  );
}

export default ListBrand;
