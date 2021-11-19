import { 
    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_CREATE_FAIL, 
} from '../constants/tableReservationConstants';

export const reservationCreateReducer = ( state = {}, action) => {
    switch(action.type){
        case TABLE_CREATE_REQUEST:
            return{
                loading: true
            }
        case TABLE_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload,
            }
        case TABLE_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
