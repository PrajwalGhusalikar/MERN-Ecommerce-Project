import { api } from "../../Config/apiConfig";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";

export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const data = await api.post(`/api/orders`, reqData.address);

    if (data.data._id) {
      console.log("ID:", data.data._id);
      reqData.navigate({ search: `step=2&order_id=${data.data._id}` });
    }
    console.log("created order:-", data.data);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};

export const getOrder = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    console.log("orderId: ", orderId)
    const data = await api.get(`/api/orders/${orderId}`);

    console.log("get order:-", data);

    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};
