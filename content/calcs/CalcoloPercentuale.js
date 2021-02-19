import { useState } from "react";

import checkInput from "../../utils/commaDotConverter";
import rightArticleFor from "../../utils/rightArticleSelector";

import CalcBlock from "../../components/modules/block-calc";
import Value from "../../components/elements/input-calcvalue";

export default function CalcoloPercentuale() {
  const [perc, setPerc] = useState("");
  const [tot, setTot] = useState("");
  const [res, setRes] = useState("");
  const [resMsg, setResMsg] = useState("");

  const explanation = "Inserisci due valori per trovare il terzo.";
  const examples = "(es. Il 20% di 15 è... )";
  const procedure = (
    <>
      <span className="inline-block">
        Il{" "}
        <Value
          value={perc}
          onChange={(e) => setPerc(e.target.value)}
          symbol="%"
          size="s"
        />
      </span>{" "}
      <span className="inline-block">
        di <Value value={tot} onChange={(e) => setTot(e.target.value)} />
      </span>{" "}
      <span className="inline-block">
        {" "}
        è{" "}
        <Value value={res} onChange={(e) => setRes(e.target.value)} size="l" />
      </span>
    </>
  );

  const determineResultMsg = (p, t, r) => {
    let calcResult;
    const inputs = [p, t, r];
    const checkedInput = checkInput(inputs);

    //Verify if checkInput() returned an Error
    if (checkedInput instanceof Error) {
      setResMsg(
        <div className="error-msg">Inserisci solo valori numerici.</div>
      );
      return;
    }

    //Assign valid converted-to-dots values
    let [percent, total, result] = checkedInput;

    //Determine calculation and respective result message to set
    if (!percent && !total && !result) {
      setResMsg(
        <div className="error-msg">
          Nessun valore inserito. Per favore compila i campi.
        </div>
      );
      return;
    } else if (percent && total && result) {
      calcResult = (total * percent) / 100 == result;
      setResMsg(
        <div className="result-msg">
          <div className="mb-1">
            Il calcolo della percentuale è{" "}
            <div className="highlight-res">
              {calcResult ? "giusto" : "sbagliato"}
            </div>
            .{" "}
          </div>
          <div>
            {rightArticleFor(percent, true)}
            {percent}% di {tot} è{" "}
            <div className="highlight-res">{(total * percent) / 100}</div>
          </div>
        </div>
      );
      return;
    } else if (!percent && total && result) {
      calcResult = (result * 100) / total;
      setResMsg(
        <div className="result-msg">
          {result} è {rightArticleFor(calcResult)}
          <div className="highlight-res">{calcResult}%</div> di {total}
        </div>
      );
      return;
    } else if (percent && !total && result) {
      calcResult = (result * 100) / percent;
      setResMsg(
        <div className="result-msg">
          {result} è {rightArticleFor(percent)}
          {percent}% di <div className="highlight-res">{calcResult}</div>
        </div>
      );
    } else if (percent && total && !result) {
      calcResult = (percent / 100) * total;
      setResMsg(
        <div className="result-msg">
          <div>
            {rightArticleFor(percent, true)}
            {percent}% di {total} è{" "}
            <div className="highlight-res">{calcResult}</div>
          </div>
          <hr />
          <div>
            {total} - {percent}% ={" "}
            <div className="highlight-res">{total - calcResult}</div>
          </div>
          <hr />
          <div>
            {total} + {percent}% ={" "}
            <div className="highlight-res">{total + calcResult}</div>
          </div>
        </div>
      );
      return;
    } else {
      setResMsg(<div className="error-msg">Inserisci almeno due valori.</div>);
      return;
    }
  };

  const handleCalculate = (e) => {
    determineResultMsg(perc, tot, res);
    e.preventDefault();
  };

  const handleClear = (e) => {
    setPerc("");
    setTot("");
    setRes("");
    setResMsg("");
    e.preventDefault();
  };

  return (
    <CalcBlock
      explanation={explanation}
      examples={examples}
      procedure={procedure}
      result={resMsg}
      handleCalculate={handleCalculate}
      handleClear={handleClear}
    />
  );
}
