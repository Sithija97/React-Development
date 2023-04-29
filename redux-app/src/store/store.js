import { combineReducers, createStore } from "redux";
import { countReducer } from "./reducers";

const rootReducer = combineReducers({
  countReducer,
});

const store = createStore(rootReducer);
