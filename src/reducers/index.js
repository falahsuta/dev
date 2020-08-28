import { combineReducers } from "redux";

const selectedNavReducer = (selectedNav = null, action) => {
  if (action.type === "NAV_SELECTED") {
    return action.payload;
  }
  return selectedNav;
};

const dialReducer = (state = false, action) => {
  if (action.type === "DIAL_OPENED" || action.type === "DIAL_CLOSED") {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  nav: selectedNavReducer,
  dial: dialReducer,
});
