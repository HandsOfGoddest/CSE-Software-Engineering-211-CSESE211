import { RES_CREATE_FAIL, RES_CREATE_REQUEST, RES_CREATE_SUCCESS, TABLE_FAIL, TABLE_REQUEST, TABLE_SUCCESS 
} from '../constants/tableReservationConstants';

export const reservationCreateReducer = ( state = {}, action) => {
    switch(action.type){
        case RES_CREATE_REQUEST:
            return{
                loading: true
            }
        case RES_CREATE_SUCCESS:
            return {
                loading: false,
                reservation: action.payload,
            }
        case RES_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export const getTableReducer = ( state = {}, action) => {
    switch(action.type){
        case TABLE_REQUEST:
            return{
                loading: true
            }
        case TABLE_SUCCESS:
            return {
                loading: false,
                tableList: action.payload,
            }
        case TABLE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
