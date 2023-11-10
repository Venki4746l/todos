import { applyMiddleware, createStore } from "redux";
import rootRducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
const middleware=[thunk]
const store=createStore(rootRducer,composeWithDevTools(applyMiddleware(...middleware,logger)))
export default store