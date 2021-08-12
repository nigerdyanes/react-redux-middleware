import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer
});

export default function generateStore() {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  return store;
}
