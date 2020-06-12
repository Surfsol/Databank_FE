import React from "react";
import { combineReducers } from "redux";
import barDownloadReducer from "./barDownloadReducer";
import compareSubSamplesReducer from "./compareSubSamplesReducer";
import calendarReducer from "./calendarReducer";
import clearReducer from "./clearFiltersReducer";

const rootReducer = combineReducers({
  barDownloadReducer,
  compareSubSamplesReducer,
  calendarReducer,
  clearReducer
});
export default rootReducer;
