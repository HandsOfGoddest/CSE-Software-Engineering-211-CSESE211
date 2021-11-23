import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { addOneBrandReducer, addOneCategoryReducer, brandListReducers, deleteOneBrandReducer, deleteOneCategoryReducer, productsListOfBrandReducers, productsListOfCateReducers } from './reducers/brandReducers'
import {productListReducer, productDetailsReducer, productReviewCreateReducer, addOneProductReducer, deleteOneProductReducer} from './reducers/productReducers'
import {userLoginReducer, userRegisterReducer,
userDetailsReducer,
userUpdateProfileReducer,
} from './reducers/userReducers'

import { cartReducer, cartListMyReducer, updateCartReducer } from './reducers/cartReducers'
import { 
        orderCreateReducer, 
        orderDetailsReducer,
        orderPayReducer,
        orderListMyReducer,
    } from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    brandList: brandListReducers,
    productListOfBrand: productsListOfBrandReducers,
    productReviewCreate: productReviewCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    cart: cartReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    cartListMy: cartListMyReducer,
    updateCart: updateCartReducer,
    productsListOfCate: productsListOfCateReducers,
    addOneBrand: addOneBrandReducer,
    addOneCategory: addOneCategoryReducer,
    addOneProduct: addOneProductReducer,
    deleteOneBrand: deleteOneBrandReducer,
    deleteOneCategory: deleteOneCategoryReducer,
    deleteOneProduct: deleteOneProductReducer
})


const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []



const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
:null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
:{}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage, 
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: {userInfo: userInfoFromStorage},
    
}


const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store