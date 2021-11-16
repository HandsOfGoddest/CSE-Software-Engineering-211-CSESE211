import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import {userLoginReducer, userRegisterReducer,
userDetailsReducer,
userUpdateProfileReducer,
} from './reducers/userReducers'


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    
})

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
:null


const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store