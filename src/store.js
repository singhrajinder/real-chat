import { applyMiddleware, createStore } from "redux";
import RootReducer from "./rducer";
import thunk from "redux-thunk";


const store =  createStore(RootReducer,applyMiddleware(thunk));

 window.store = store; 

export default store






