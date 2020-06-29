import React from "react";
import "./style.css";

export const ClearButton = ({onHandleClear, children}) => (
  <div className="clearButton" onClick={onHandleClear}>
    {children}
  </div>
);
