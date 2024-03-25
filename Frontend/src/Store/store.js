import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducers } from "./Auth/Reducer";
import { customerProductReducer } from "./Products/ProductReducer";
import { cartReducer } from "./Cart/CartReducer";
import { orderReducer } from "./Orders/OrderReducer";

const rootReducers = combineReducers({
  auth: authReducers,
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
