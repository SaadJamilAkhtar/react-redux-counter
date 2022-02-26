import {combineReducers} from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const rootReducer = combineReducers(({
    counter: counterReducer,
    loggedIn: loggedReducer
}))

export default rootReducer