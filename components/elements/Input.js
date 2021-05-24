import React from "react";
import InputLayout from "./InputLayout";
const _ = require("lodash");

import { useState } from "react";

const Input = ({
  //Form attributes
  value,
  error,
  onChange,
  onBlur,
  onFocus,
  //Optional attributes
  labelText,
  size = "fluid",
  type = "text",
  numMin,
  numMax = 999999,
  //Symbol
  symbol,
  symbolValue,
  symbolOnChange,
}) => {
  const [id] = useState(_.uniqueId("input_"));
  return (
    <>
      <InputLayout labelText={labelText} error={error} id={id}>
        <input
          className={error ? "error-input" : "undefined"}
          value={value}
          onChange={onChange}
          type={type}
          name="calcField"
          id={id}
          aria-label="Campo Valore"
          min={numMin}
          max={type === "number" ? numMax : undefined}
          onBlur={onBlur}
          onFocus={onFocus}
        ></input>
        {symbol && (
          <span className="symbol">
            {symbolComponent(symbol, symbolValue, symbolOnChange)}
          </span>
        )}
      </InputLayout>
      <style jsx>
        {`
          input {
            border-radius: ${symbol ? "5px 0 0 5px" : "5px"};
            width: ${renderSwitch(size)};
          }
          .symbol {
            display: flex;
            align-items: center;
            border: 1px solid #999;
            border-left: none;
            border-radius: 0 5px 5px 0;
            background-color: lightgray;
            width: 100%;
            max-width: fit-content;
          }
          .input-wrapper {
            grid-template-columns: ${symbol ? "auto max-content" : "auto"};
          }
        `}
      </style>
    </>
  );
};

const symbolComponent = (symbol, symbolValue, symbolOnChange) => {
  if (Array.isArray(symbol)) {
    symbol = (
      <select
        value={symbolValue}
        onChange={symbolOnChange}
        className="symbol-select symbol-inside"
      >
        {symbol.map((opt, i) => (
          <option value={opt} key={`select-symbol-${i}`}>
            {opt}
          </option>
        ))}
      </select>
    );
  } else {
    symbol = <div className="symbol-inside">{symbol}</div>;
  }
  return symbol;
};

const renderSwitch = (size) => {
  const sizes = {
    s: "100px",
    m: "125px",
    l: "200px",
    fluid: "100%",
  };
  return sizes[size];
};

export default Input;
