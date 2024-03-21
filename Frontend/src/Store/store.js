import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducers } from "./Auth/Reducer";
import { customerProductReducer } from "./Products/ProductReducer";

const rootReducers = combineReducers({
  auth: authReducers,
  product: customerProductReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
