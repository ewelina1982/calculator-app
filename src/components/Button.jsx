import React from "react";
import "./style.css";

const isOperator = val => {
  return !isNaN(val) || val === "." || val ==="C" || val ==="%" || val ==="-/+";
};

const isOperatorEqual = val => {
  return  val === "=" ;
};

export const Button = ({onHandleClick, children}) => (
  <div
    className={`buttonWrapper ${
      isOperator(children) ? null : (isOperatorEqual(children)  ? "equal":  "operator")
    }`}
    onClick={() => onHandleClick(children)}
  >
    {children}
  </div>
);
