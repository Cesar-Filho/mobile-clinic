import { Alert } from "react-native";
import api from "../../services";
import { useDispatch } from "react-redux";

// ACTIONS
export function useOrders() {
  const dispatch = useDispatch();
  return {
    async getList({ patient_id }) {
      try {
        const response = await api.get("/orders", { params: { patient_id } });
        dispatch({ type: "ORDERS_LIST", payload: response.data });
      } catch (err) {
        Alert.alert(err.message);
        dispatch({ type: "ERROR", payload: err.message });
      }
    },
    async create(data) {
      try {
        const response = await api.post("/orders", data);
        dispatch({ type: "ORDERS_CREATE", payload: response.data });
      } catch (err) {
        Alert.alert(err.response.data.error_description);
        dispatch({ type: "ERROR", payload: err.message });
      }
    },
  };
}

// REDUCERS
const INITIAL_STATE = { list: [], detail: {} };

export const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ORDERS_LIST":
      return { ...state, list: action.payload };
    case "ORDERS_READ":
      return { ...state, detail: action.payload };
    case "ORDERS_CREATE":
      return { ...state, detail: action.payload };
    case "ORDERS_EDIT":
      return { ...state, detail: action.payload };
    case "ORDERS_DELETE":
      return { ...state, detail: null };
    default:
      return state;
  }
};
