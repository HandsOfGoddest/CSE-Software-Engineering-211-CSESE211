import axios from "axios";
import { BRAND_LIST_FAIL, BRAND_LIST_PRODUCTS_FAIL, BRAND_LIST_PRODUCTS_REQUEST, 
  BRAND_LIST_PRODUCTS_SUCCESS, BRAND_LIST_REQUEST, BRAND_LIST_SUCCESS, 
  CATE_LIST_PRODUCTS_FAIL, CATE_LIST_PRODUCTS_REQUEST, CATE_LIST_PRODUCTS_SUCCESS 
} from "../constants/brandConstants";



export const listBrands = () => async (dispatch) => {
    try {
      dispatch({ type: BRAND_LIST_REQUEST})
      const { data } = await axios.get('/api/brands')
      dispatch({
        type: BRAND_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: BRAND_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
}

export const listProductsOfBrand = (pathName) => async (dispatch) => {
    try {
        dispatch({ type: BRAND_LIST_PRODUCTS_REQUEST })
        const { data } = await axios.get(`/api/brands/getproducts/${pathName}`)
        dispatch({
            type: BRAND_LIST_PRODUCTS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: BRAND_LIST_PRODUCTS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
          })
    }
}
export const listProductsOfCate = (pathName, cateName) => async (dispatch) => {
    try {
        dispatch({ type: CATE_LIST_PRODUCTS_REQUEST })
        const { data } = await axios.get(`/api/brands/getproducts/${pathName}/${cateName}`)
        dispatch({
            type: CATE_LIST_PRODUCTS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: CATE_LIST_PRODUCTS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
          })
    }
}