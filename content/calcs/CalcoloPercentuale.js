import { useState } from "react";

import { commaToDot, rightArticleFor } from "../../utils/utilities";

import CalcBlock from "../../components/modules/block-calc";
import Input from "../../components/elements/Input";

export default function CalcoloPercentuale({ pageTitle }) {
  const [cent, setCent] = useState("");
  const [whole, setWhole] = useState("");
  const [part, setPart] = useState("");

  const [resMsg, setResMsg] = useState("");

  const resetState = () => {
    setCent(""), setWhole(""), setPart(""), setResMsg("");
  };

  const inputToNum = () => {
    let numInput = { cent, whole, part };
    Object.keys(numInput).forEach((key) => {
      //Commas are converted to dots
      let toDot = commaToDot(numInput[key]);
      //Input is converted to Number
      let toNum = Number(toDot);
      //Returns Number or NaN
      return (numInput[key] = toNum);
    });

    return numInput;
  };

  const generateResMsg = () => {
    let input = inputToNum();

    let inputValues = Object.values(input);
    let outcome;

    const results = {
      cent: (input.part * 100) / input.whole,
      whole: (input.part * 100) / input.cent,
      part: (input.cent / 100) * input.whole,
    };

    const errors = [
      {
        type: "ERR_WRONG_INPUT",
        condition: inputValues.some((value) => isNaN(value)),
        msg: "Inserisci solo valori numerici.",
      },
      {
        type: "ERR_FEW_VALUES",
        condition: inputValues.filter((i) => i).length < 2,
        msg: "Inserisci almeno 2 valori.",
      },
    ];

    const calcs = [
      {
        type: "FIND_CENT",
        condition: !input.cent,
        msg: (
          <>
            {input.part} è {rightArticleFor(results.cent)}
            <div className="highlight-res">{results.cent}%</div> di{" "}
            {input.whole}
          </>
        ),
      },
      {
        type: "FIND_WHOLE",
        condition: !input.whole,
        msg: (
          <>
            {input.part} è {rightArticleFor(input.cent)}
            {input.cent}% di{" "}
            <div className="highlight-res">{results.whole}</div>
          </>
        ),
      },
      {
        type: "FIND_PART",
        condition: !input.part,
        msg: (
          <>
            <div>
              {rightArticleFor(input.cent, true)}
              {input.cent}% di {input.whole} è{" "}
              <div className="highlight-res">{results.part}</div>
            </div>
            <hr />
            <div>
              {input.whole} - {input.cent}% ={" "}
              <div className="highlight-res">{input.whole - results.part}</div>
            </div>
            <hr />
            <div>
              {input.whole} + {input.cent}% ={" "}
              <div className="highlight-res">{input.whole + results.part}</div>
            </div>
          </>
        ),
      },
      {
        type: "VERIFY_CALC",
        condition: inputValues.every((i) => i),
        msg: (
          <>
            <div className="mb-1">
              Il calcolo della percentuale è{" "}
              <div className="highlight-res">
                {results.part === input.part ? "giusto" : "sbagliato"}
              </div>
              .{" "}
            </div>
            <div>
              {rightArticleFor(input.cent, true)}
              {input.cent}% di {input.whole} è{" "}
              <div className="highlight-res">{results.part}</div>
            </div>
          </>
        ),
      },
    ];

    //Logic
    let errorMsg = errors.find((obj) => obj.condition)?.msg;
    if (errorMsg) {
      return <div className="error-msg-generic">{errorMsg}</div>;
    } else {
      outcome = calcs.find((obj) => obj.condition).msg;
    }
    return <div className="result-msg">{outcome}</div>;
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const msg = generateResMsg();
    setResMsg(msg);
  };

  const handleClear = (e) => {
    e.preventDefault();
    resetState();
  };

  const explanation = "Inserisci due valori per trovare il terzo.";
  const examples = "(es. Il 20% di 15 è... )";

  return (
    <CalcBlock
      explanation={explanation}
      examples={examples}
      result={resMsg}
      pageTitle={pageTitle}
      handleCalculate={handleCalculate}
      handleClear={handleClear}
      hasClearBtn
    >
      {" "}
      <>
        <span className="outer">
          Il{" "}
          <span className="inline-block">
            <Input
              id="calc-perc-cent"
              value={cent}
              onChange={(e) => setCent(e.target.value)}
              symbol="%"
              size="s"
            />
          </span>
        </span>{" "}
        <span className="outer">
          di{" "}
          <Input
            id="calc-perc-whole"
            value={whole}
            onChange={(e) => setWhole(e.target.value)}
            size="m"
          />
        </span>{" "}
        <span className="outer on-new-line">
          {" "}
          è{" "}
          <Input
            id="calc-perc-part"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            size="l"
          />
        </span>
        <style jsx>{`
          .outer {
            display: inline-grid;
            grid-template-columns: auto auto;
            grid-template-rows: auto;
            align-items: center;
            gap: 0.5rem;
            margin: 0.5rem 0;
          }

          }
        `}</style>
      </>
    </CalcBlock>
  );
}
