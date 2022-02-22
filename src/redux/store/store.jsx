import { createStore , combineReducers } from "redux";
import { reducer } from "../reducers/expences";



const reducers = combineReducers({  // root reducer 
    reducer
})

const store = createStore(reducers); // store

export default store