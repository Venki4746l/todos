import { combineReducers } from "redux";
import CountReducer from "./Reducers/CountReducer";

const rootRducer=combineReducers({
     count:CountReducer
     
})
export default rootRducer