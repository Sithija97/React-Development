import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducer";

const rootReducer = combineReducers({
  counterReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
