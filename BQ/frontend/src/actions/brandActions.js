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
  CATE_LIST_PRODUCTS_FAIL,
  CATE_LIST_PRODUCTS_REQUEST,
  CATE_LIST_PRODUCTS_SUCCESS,
  CREATE_BRAND_FAIL,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_BRAND_FAIL,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,

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
export const listCate = (brandPathName) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_LIST_REQUEST })
    const { data } = await axios.get(`/api/brands/catelist/${brandPathName}`)
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
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
}


export const listProductsOfCate = (pathName, cateName) => async (dispatch) => {
  try {
    dispatch({ type: CATE_LIST_PRODUCTS_REQUEST });
    const { data } = await axios.get(
      `/api/brands/getproducts/${pathName}/${cateName}`
    );
    dispatch({
      type: CATE_LIST_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATE_LIST_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewBrand =
  (brandName, pathName, image) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_BRAND_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(
        "/api/brands/add",
        { brandName, pathName, image },
        config
      );

      dispatch({
        type: CREATE_BRAND_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BRAND_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const addNewCate =
  (cateName, catePathName, brandName, image) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_CATEGORY_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      await axios.post(
        "/api/brands/addCategory",
        { cateName, catePathName, brandName, image },
        config
      );

      dispatch({
        type: CREATE_CATEGORY_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteBrand = (brandPathName) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_BRAND_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/brands/${brandPathName}`, config)
    dispatch({
      type: DELETE_BRAND_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    })
  }
};
export const deleteCategory = (catePathName) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_CATEGORY_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
 const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/brands/deleteCate/${catePathName}`, config)
    dispatch({
      type: DELETE_CATEGORY_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    })
  }
};
