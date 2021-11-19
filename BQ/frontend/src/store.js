import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import { brandListReducers, productsListOfBrandReducers } from './reducers/brandReducers'
import { reservationCreateReducer } from './reducers/tableReservationReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    brandList: brandListReducers,
    productListOfBrand: productsListOfBrandReducers,
    tableReservationCreate: reservationCreateReducer,
})

const initialState = {}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store