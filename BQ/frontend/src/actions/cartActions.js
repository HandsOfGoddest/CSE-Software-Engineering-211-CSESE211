import axios from 'axios'
import { 
            CART_ADD_ITEM, 
            CART_REMOVE_ITEM, 
            CART_SAVE_SHIPPING_ADDRESS,
            CART_SAVE_PAYMENT_METHOD,
            CART_LIST_MY_FAIL,
            CART_LIST_MY_SUCCESS,
            CART_LIST_MY_REQUEST,
            CART_UPDATE_REQUEST,
            CART_UPDATE_SUCCESS,
            CART_UPDATE_FAIL,
            CART_REMOVE_ALL_ITEM,
            CART_UPDATE_ALL_ITEM
        } from '../constants/cartConstant'

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty,
            brandName: data.brandName
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
} 

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeAllCart = () => (dispatch, getState) => {
  dispatch({
      type: CART_REMOVE_ALL_ITEM,
})

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const updateAllCart = (data) => (dispatch, getState) => {
  dispatch({
      type: CART_UPDATE_ALL_ITEM,
      payload: data
})
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}




export const listMyCart = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: CART_LIST_MY_REQUEST,
      });
  
      const userInfo = getState().userLogin.userInfo;
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/cart`,config );
      dispatch({
        type: CART_LIST_MY_SUCCESS,
        payload: data,
      });
      dispatch(updateAllCart(data));
    } catch (error) {
      dispatch({
        type: CART_LIST_MY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const updateCart = (orderItems) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CART_UPDATE_REQUEST,
      });

      const {
        userLogin: {userInfo},
      } = getState()
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.post(`/api/cart/update`, orderItems, config);

      dispatch({
        type: CART_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CART_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };