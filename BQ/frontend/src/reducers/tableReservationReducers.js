import { TABLE_LIST_FAIL, TABLE_LIST_REQUEST, TABLE_LIST_SUCCESS} from "../constants/tableReservationConstants";


export const tableListReducers = (state = { tables: [] }, action) => {
    switch (action.type) {
      case TABLE_LIST_REQUEST:
        return { loading: true, tables: [] }
      case TABLE_LIST_SUCCESS:
        return { loading: false, tables: action.payload }
      case TABLE_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
};