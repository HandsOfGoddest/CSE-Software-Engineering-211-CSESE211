import axios from "axios";
import {
  BRAND_LIST_FAIL,
  BRAND_LIST_PRODUCTS_FAIL,
  BRAND_LIST_PRODUCTS_REQUEST,
  BRAND_LIST_PRODUCTS_SUCCESS,
  BRAND_LIST_REQUEST,
  BRAND_LIST_SUCCESS,
  CATEGORY_PRODUCTS_FAIL,
  CATEGORY_PRODUCTS_REQUEST,
  CATEGORY_PRODUCTS_SUCCESS,
  SAVE_BRAND_FAIL,
  SAVE_BRAND_REQUEST,
} from "../constants/brandConstants";

export const listBrands = () => async (dispatch) => {
  try {
    dispatch({ type: BRAND_LIST_REQUEST });
    const { data } = await axios.get("/api/brands");
    dispatch({
      type: BRAND_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BRAND_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const saveBrands = (data) => async(dispatch) => {
  
     dispatch({
        type: SAVE_BRAND_REQUEST,
        payload: data,
    })

    localStorage.setItem('brand', JSON.stringify(data))
  
    }
  


export const listProductsOfBrand = (pathName) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_LIST_PRODUCTS_REQUEST });
    const { data } = await axios.get(`/api/brands/${pathName}`);
    const temp_id = data.hasProducts;
    let ans = [];
    for (let i = 0; i < temp_id.length; i++) {
      ans.push((await axios.get(`/api/products/${temp_id[i]}`)).data);
    }
    dispatch({
      type: BRAND_LIST_PRODUCTS_SUCCESS,
      payload: ans,
    });
  } catch (error) {
    dispatch({
      type: BRAND_LIST_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
