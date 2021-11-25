import axios from "axios";
import { TABLE_LIST_FAIL, TABLE_LIST_REQUEST, TABLE_LIST_SUCCESS} from "../constants/tableReservationConstants";


export const listTables = () => async (dispatch) => {
    try {
      dispatch({ type: TABLE_LIST_REQUEST})
      const { data } = await axios.get('/api/tables')
      dispatch({
        type: TABLE_LIST_SUCCESS,
        payload: data
      })
    } catch (error) {
      dispatch({
        type: TABLE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
}