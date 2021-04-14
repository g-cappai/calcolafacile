import React from "react";
import InputLayout from "./InputLayout";
const _ = require("lodash");
import { useState } from "react";

const Textarea = ({
  //Form attributes
  value,
  error,
  onChange,
  onBlur,
  onFocus,
  //Optional attributes
  labelText,
}) => {
  const [id] = useState(_.uniqueId("input_"));
  return (
    <>
      <InputLayout error={error} labelText={labelText} id={id}>
        <textarea
          className={error ? "error-input" : undefined}
          onChange={onChange}
          value={value}
          name="textArea"
          id={id}
          aria-label="Area testo"
          onBlur={onBlur}
          onFocus={onFocus}
        ></textarea>
      </InputLayout>
      <style jsx>{`
        textarea {
          width: 100%;
          height: 10rem;
        }
      `}</style>
    </>
  );
};
export default Textarea;
