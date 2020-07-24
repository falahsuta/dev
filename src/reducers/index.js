import { combineReducers } from "redux";

const selectedNavReducer = (selectedNav = "Home", action) => {
  if (action.type === "NAV_SELECTED") {
    return action.payload;
  }
  return selectedNav;
};

export default combineReducers({
  nav: selectedNavReducer,
});
