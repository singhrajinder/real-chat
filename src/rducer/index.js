

import { combineReducers } from "redux";
import SignInReducer from "./signInReducer";
import LoginReducer from "./logInReducer"
const RootReducer = combineReducers ({
    SignInReducer,
    LoginReducer
})


export default RootReducer