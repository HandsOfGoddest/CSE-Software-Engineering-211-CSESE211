import { 
        CART_ADD_ITEM, 
        CART_REMOVE_ITEM, 
        CART_REMOVE_ALL_ITEM,
        CART_SAVE_SHIPPING_ADDRESS,
        CART_SAVE_PAYMENT_METHOD,
        CART_LIST_MY_REQUEST,
        CART_LIST_MY_SUCCESS,
        CART_LIST_MY_FAIL,
        CART_LIST_MY_RESET,
        CART_UPDATE_SUCCESS,
        CART_UPDATE_FAIL,
        CART_UPDATE_REQUEST,
        CART_UPDATE_ALL_ITEM,
        REMOVE_OR_CR,
    } from '../constants/cartConstant'



export const cartReducer = (state = { cartItems: [], shippingAdress:{},orderCreate:{} }, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(x => x.product === item.product)

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload),
            }
        case CART_SAVE_SHIPPING_ADDRESS:
        return {
            ...state,
            shippingAddress: action.payload,
        }
        case CART_SAVE_PAYMENT_METHOD:
        return {
            ...state,
            paymentMethod: action.payload,
        }
        case CART_REMOVE_ALL_ITEM:
            return{
            ...state,
            cartItems: []
        }
        case CART_UPDATE_ALL_ITEM:
            //console.log(action.payload)
            const data = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []
            return{
            ...state,
            cartItems:  action.payload
        }
        default:
            return state
    }
}


export const cartListMyReducer = (
    state = { cart:[] },
    action
  ) => {
    switch (action.type) {
      case CART_LIST_MY_REQUEST:
        return {
          loading: true 
        };
      case CART_LIST_MY_SUCCESS:
          console.log(action.payload)
        return { 
          loading: false, 
          cart: action.payload,
        };
  
      case CART_LIST_MY_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CART_LIST_MY_RESET:
        return {
            cart: []
        };
      default:
        return state;
    }
  };

  export const updateCartReducer = ( state = {}, action) => {
    switch(action.type){
        case CART_UPDATE_REQUEST:
            return{
                loading: true
            }
        case CART_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                cart: action.payload,
            }
        case CART_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}