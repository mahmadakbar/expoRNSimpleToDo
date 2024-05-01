import { combineReducers } from "redux";
import dataTodo from "./dataTodo";

const rootReducer = combineReducers<any>({
  dataTodo,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
