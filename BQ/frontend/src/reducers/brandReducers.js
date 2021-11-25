import {
  BRAND_LIST_FAIL,
  BRAND_LIST_PRODUCTS_FAIL,
  BRAND_LIST_PRODUCTS_REQUEST,
  BRAND_LIST_PRODUCTS_SUCCESS,
  BRAND_LIST_REQUEST,
  BRAND_LIST_SUCCESS,
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
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
} from "../constants/brandConstants";

export const brandListReducers = (state = { brands: [] }, action) => {
  switch (action.type) {
    case BRAND_LIST_REQUEST:
      return { loading: true, brands: [] };
    case BRAND_LIST_SUCCESS:
      return { loading: false, brands: action.payload };
    case BRAND_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productsListOfBrandReducers = (
  state = { ProductsOfBrand: [] },
  action
) => {
  switch (action.type) {
    case BRAND_LIST_PRODUCTS_REQUEST:
      return { loading: true, ProductsOfBrand: [] };
    case BRAND_LIST_PRODUCTS_SUCCESS:
      return { loading: false, ProductsOfBrand: action.payload };
    case BRAND_LIST_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productsListOfCateReducers = (
  state = { productsOfCate: [] },
  action
) => {
  switch (action.type) {
    case CATE_LIST_PRODUCTS_REQUEST:
      return { loading: true, productsOfCate: [] };
    case CATE_LIST_PRODUCTS_SUCCESS:
      return { loading: false, productsOfCate: action.payload };
    case CATE_LIST_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addOneBrandReducer = (state ={}, action) => {
  switch (action.type) {
    case CREATE_BRAND_REQUEST:
      return { loading: true }
    case CREATE_BRAND_SUCCESS:
      return { loading: false, success: true }
    case CREATE_BRAND_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const addOneCategoryReducer = (state ={}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { loading: true }
    case CREATE_CATEGORY_SUCCESS:
      return { loading: false, success: true }
    case CREATE_CATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteOneBrandReducer = (state = {}, action) => {
  switch(action.type) {
    case DELETE_BRAND_REQUEST:
      return { loading: true }
    case DELETE_BRAND_SUCCESS:
      return { loading: false, success: true }
    case DELETE_BRAND_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteOneCategoryReducer = (state = {}, action) => {
  switch(action.type) {
    case DELETE_CATEGORY_REQUEST:
      return { loading: true }
    case DELETE_CATEGORY_SUCCESS:
      return { loading: false, success: true }
    case DELETE_CATEGORY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}