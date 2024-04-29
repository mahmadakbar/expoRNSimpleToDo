import { combineReducers } from "redux";
import dataCount from "./dataCount";

const rootReducer = combineReducers<any>({
  dataCount,
});

export default rootReducer;
