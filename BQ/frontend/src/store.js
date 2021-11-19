import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { brandListReducers, productsListOfBrandReducers } from './reducers/brandReducers'
import { getTableReducer, reservationCreateReducer } from './reducers/tableReservationReducers'
import { productDetailsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productsListOfBrandReducers,
    productDetails: productDetailsReducer,
    brandList: brandListReducers,
    productListOfBrand: productsListOfBrandReducers,
    tableReservationCreate: reservationCreateReducer,
    getTable: getTableReducer
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