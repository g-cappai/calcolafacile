import { useState } from "react";

export default function useForm(inputObj) {
  return FormObject(inputObj);
}

function FormObject(inputObj) {
  const formObj = {};
  Object.entries(inputObj).forEach(([k, v]) => {
    const [attributes, methods] = FieldObject(v);
    formObj[k] = { attributes, methods };
  });
  const attributes = {};
  const methods = {};
  Object.keys(formObj).forEach((k) => {
    attributes[k] = formObj[k].attributes;
    methods[k] = formObj[k].methods;
  });
  const getValues = () => {
    let allValid = true;
    const valuesObj = {};
    for (let field of Object.keys(formObj)) {
      if (!methods[field].isValid() && allValid) allValid = false;
    }
    if (allValid) {
      Object.keys(attributes).forEach(
        (k) => (valuesObj[k] = attributes[k].value)
      );
      return valuesObj;
    }
  };
  return [attributes, getValues];
}

function FieldObject({ defaultValue, isRequired, validation }) {
  const defVal = defaultValue || "";
  const isReq = isRequired || false;
  const valArr = validation || false;
  const [value, setValue] = useState(defVal);
  const [error, setError] = useState("");
  const validate = () => {
    try {
      if (
        !valArr.every(
          ({ condition }) =>
            typeof condition === "function" || condition instanceof RegExp
        )
      )
        throw "Validation conditions must be a RegExp or Function.";
    } catch (err) {
      console.error(err);
      return false;
    }
    let validationError = valArr.find(({ condition }) => {
      if (typeof condition === "function") {
        return !condition(value);
      } else if (condition instanceof RegExp) {
        return !condition.test(value);
      }
    });
    return validationError?.msg;
  };

  const attributes = {
    value,
    error,
    onChange: (e) => {
      setValue(e.target.value);
    },
    onBlur: () => {
      methods.isValid();
    },
    onFocus: () => {
      setError("");
    },
  };

  const methods = {
    isValid: () => {
      let errorMsg = "";
      if (isReq && value === defVal) {
        errorMsg = "Campo richiesto.";
      } else if (valArr) {
        let validatorError = validate();
        if (validatorError) {
          errorMsg = validatorError;
        }
      }
      setError(errorMsg);
      return errorMsg ? false : true;
    },
  };
  return [attributes, methods];
}
