import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk"
import { authReducers } from "./Auth/Reducer"

const rootReducers = combineReducers({
  auth: authReducers
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))

