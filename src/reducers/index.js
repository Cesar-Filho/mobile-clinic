import { combineReducers } from "redux";
import * as actions from "./actions";

const reducerNames = Object.keys(actions).filter(
  (a) => a.substring(a.length - 7) === "Reducer"
);

const reducers = {};
reducerNames.forEach((element) => {
  reducers[element.substring(0, element.length - 7)] = actions[element];
});

export default combineReducers(reducers);
