import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import { listBrands , listProductsOfBrand} from "../actions/brandActions";
import Brand from "../components/Brand";
import  Hello from "../components/getListProductOfBrand";


const CategoryScreen = () => {

  const dispatch = useDispatch();

  const brandList = useSelector((state) => state.brandList || {});

  const { brands } = brandList;


  useEffect(() => {
    //dispatch(listProducts());
    dispatch(listBrands());
   
  }, [dispatch]);
  

  return (
    <>
      <div id="food-list">
        {brands.map((brand) => (
          <div key={brand._id}>
            <Brand brand={brand} />
             <Hello match={brand}/>
          </div>
        ))}
      </div>
     

    
    </>
     
  );
};

export default CategoryScreen;
