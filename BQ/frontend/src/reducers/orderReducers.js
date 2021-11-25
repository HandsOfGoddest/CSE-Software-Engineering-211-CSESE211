import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAIL,
    ORDER_PAY_RESET,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,
    GET_ALL_ORDER_REQUEST,
    GET_ALL_ORDER_SUCCESS,
    GET_ALL_ORDER_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
} from "../constants/orderConstants";


export const orderCreateReducer = ( state = {}, action) => {
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return{
                loading: true
            }
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload,
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const orderDetailsReducer = (
    state = { loading:true, orderItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case ORDER_DETAILS_REQUEST:
        return { 
            ...state,
            loading: true };
      case ORDER_DETAILS_SUCCESS:
        return { loading: false, success: true,order:action.payload };
  
      case ORDER_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
        // case ORDER_PAY_RESET:
        //   return {}
      default:
        return state;
    }
  };

export const orderPayReducer = (
  state = { },
  action
) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };

    case ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      case ORDER_PAY_RESET:
        return{}
    default:
      return state;
  }
};

export const orderListMyReducer = (
  state = { orders:[] },
  action
) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        loading: true 
      };
    case ORDER_LIST_MY_SUCCESS:
      console.log(action.payload)
      return { 
        loading: false, 
        orders: action.payload,
      };

    case ORDER_LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_LIST_MY_RESET:
      return {
          orders: []
      };
    default:
      return state;
  }
};

export const orderListReducer = (state = {}, action) => {
  switch (action.type){
    case GET_ALL_ORDER_REQUEST:
      return { loading: true }
    case GET_ALL_ORDER_SUCCESS:
      return { loading: false, orderList: action.payload }
    case GET_ALL_ORDER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const updateOrderStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDER_REQUEST:
      return { loading: true }
    case UPDATE_ORDER_SUCCESS:
      return { loading: false, success: true }
    case UPDATE_ORDER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}