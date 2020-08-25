import React from "react";
import "./style/Current.css";
import { useSelector } from "react-redux";

export default () => {
  const nav = useSelector((state) => state.nav);

  return <div className="current"></div>;
};
