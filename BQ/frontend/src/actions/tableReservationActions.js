import axios from 'axios'

import {
    RES_CREATE_FAIL,
    RES_CREATE_REQUEST,
    RES_CREATE_SUCCESS,
    TABLE_FAIL,
    TABLE_REQUEST,
    TABLE_SUCCESS, 
} from '../constants/tableReservationConstants';


export const createReservation = (tableNum, time) => async (dispatch, getState) => {
    try {
      dispatch({
        type: RES_CREATE_REQUEST
      })

      const {
        userLogin: {userInfo},
      } = getState()
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(`/api/tables/create`, {tableNum, time}, config);

      dispatch({
        type: RES_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: RES_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getTable = (time) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TABLE_REQUEST
      })

      const { data } = await axios.post(`/api/tables/search`, {time});

      dispatch({
        type: TABLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TABLE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };