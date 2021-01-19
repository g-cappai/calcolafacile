//COMMAS TO DOTS
//Converts commas to dots.
//If it's a number returns converted number, else returns NaN.
function commaToDot(num) {
  let dotted = String(num).replace(/,/g, ".");
  if (isNaN(dotted)) return NaN;
  return dotted;
}

//Takes an array of inputs.
//If every input is Number, returns a dot converted array of numbers
//else returns an Error.
export default function checkInput(inputs) {
  let checked = [];
  for (let input of inputs) {
    input = commaToDot(input);
    if (isNaN(input)) {
      return new Error("NaN in inputs");
    }
    checked.push(Number(input));
  }
  return checked;
}
