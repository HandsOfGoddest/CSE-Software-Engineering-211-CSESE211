import axios from 'axios'

import { 
    TABLE_CREATE_REQUEST,
    TABLE_CREATE_SUCCESS,
    TABLE_CREATE_FAIL, 
} from '../constants/tableReservationConstants';


export const createReservation = (reservation) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TABLE_CREATE_REQUEST,
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

      const { data } = await axios.post(`/api/tables/reservation`, reservation, config);

      dispatch({
        type: TABLE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TABLE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };