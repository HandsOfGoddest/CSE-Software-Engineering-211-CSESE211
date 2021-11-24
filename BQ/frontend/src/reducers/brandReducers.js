import { BRAND_LIST_FAIL, BRAND_LIST_PRODUCTS_FAIL, BRAND_LIST_PRODUCTS_REQUEST, BRAND_LIST_PRODUCTS_SUCCESS, 
    BRAND_LIST_REQUEST, BRAND_LIST_SUCCESS, SAVE_BRAND_FAIL, SAVE_BRAND_REQUEST} from "../constants/brandConstants";


export const brandListReducers = (state = { brands: [] }, action) => {
    switch (action.type) {
      case BRAND_LIST_REQUEST:
        return { loading: true, brands: [] }
      case BRAND_LIST_SUCCESS:
        return { loading: false, brands: action.payload }
      case BRAND_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
};


export const productsListOfBrandReducers = (state = {ProductsOfBrand: []}, action) => {
    switch (action.type) {
        case BRAND_LIST_PRODUCTS_REQUEST:
            return { loading: true, ProductsOfBrand: [] }
        case BRAND_LIST_PRODUCTS_SUCCESS:
            return { loading: false, ProductsOfBrand: action.payload }
        case BRAND_LIST_PRODUCTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const brandReducer = (state = {}, action) => {
    switch(action.type){
        
      case SAVE_BRAND_REQUEST:
        
        return {
            ...state,
            brand: action.payload,
        }
      case SAVE_BRAND_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
     
        default:
            return state
    }
}
