import React from "react";
import InputLayout from "./InputLayout";
const _ = require("lodash");
import { useState } from "react";

const Select = ({
  //Form attributes
  value,
  error,
  onChange,
  onBlur,
  onFocus,
  //Optional attributes
  labelText,
  //accetta un array di opzioni
  options,
  placeholder,
}) => {
  const [id] = useState(_.uniqueId("input_"));
  return (
    <>
      <InputLayout error={error} labelText={labelText} id={id}>
        <select
          className={error ? "error-input" : undefined}
          onChange={onChange}
          value={value}
          name="calcField"
          id={id}
          aria-label="Campo Valore"
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {placeholder && (
            <option value="default" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt, i) => (
            <option value={opt} key={`opt-${i}`}>
              {opt}
            </option>
          ))}
        </select>
      </InputLayout>
    </>
  );
};
export default Select;
