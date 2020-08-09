import cakeReducer from "./Cake/cakeReducer";
import { combineReducers } from "redux";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./User/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});

export default rootReducer;