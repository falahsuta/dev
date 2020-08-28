export const selectNav = (nav) => {
  return {
    type: "NAV_SELECTED",
    payload: nav,
  };
};

export const openDial = () => {
  return {
    type: "DIAL_OPENED",
    payload: true,
  };
};

export const closeDial = () => {
  return {
    type: "DIAL_CLOSED",
    payload: false,
  };
};
