import React from "react";
import "./style.css";

export const InputContainer = ({mathematicalOperation, result}) => (
  <div className="inputContainer">
    {result ? <h3 className="mathematicalOperation">{mathematicalOperation}</h3> : <h3 className="result">{mathematicalOperation}</h3>}
    {result ? <h3 className="result">{result}</h3> : null}
  </div>
)
