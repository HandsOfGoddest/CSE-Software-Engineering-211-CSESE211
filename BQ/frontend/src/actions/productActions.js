import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
} from "../constants/productConstants";

export const listProducts = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(`/api/products?keyword=${keyword}`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const createProductReview = (productId, review) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST });
    const userInfo = getState().userLogin.userInfo;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
await axios.post(`/api/products/${productId}/reviews`,review, config
    );

    dispatch({
      type: PRODUCT_CREATE_REVIEW_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewProduct = (name, image, description, price, countInStock, brandPath, catePath) => async(dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST
    })
    const { userLogin: { userInfo } } = getState() 

    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }
    await axios.post(`/api/products/${brandPath}/${catePath}`, {name, image, description, price, countInStock}, config)

    dispatch({
      type: PRODUCT_CREATE_SUCCESS
    })

  } catch (error) {
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    })
  }
}

export const deleteBrand = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_PRODUCT_REQUEST,
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

    await axios.delete(`/api/products/${id}`, config)
    dispatch({
      type: DELETE_PRODUCT_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    })
  }
};

export const updateProduct = (id, product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_PRODUCT_REQUEST
    })
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.put(`/api/products/${id}`, product, config)

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}