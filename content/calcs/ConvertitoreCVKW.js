import { useState } from "react";

import CalcBlock from "../../components/modules/block-calc";
import Input from "../../components/elements/Input";

export default function ConvertitoreCVKW({ pageTitle }) {
  //redo!!! Next time remember: upadte state using e.target.value and NOT with CV KW :D

  const [CV, setCV] = useState(1);
  const [KW, setKW] = useState(0.7355);

  const updateKW = async (val) => {
    setKW(val);
    setCV(Math.round(val * 10000 * 1.35962, 2) / 10000);
  };

  const updateCV = async (val) => {
    setCV(val);
    setKW(Math.round((val * 10000) / 1.35962, 2) / 10000);
  };

  return (
    <CalcBlock pageTitle={pageTitle} size="s">
      <div className="grid-container">
        <Input
          labelText="Cavalli (CV)"
          type="number"
          value={CV}
          numMin="0"
          onChange={(e) => updateCV(e.target.value)}
          onFocus={(e) => e.target.select()}
        />
        <span className="equal-sign">=</span>
        <Input
          labelText="Kilowatt (kW)"
          type="number"
          value={KW}
          numMin="0"
          onChange={(e) => {
            updateKW(e.target.value);
          }}
          onFocus={(e) => e.target.select()}
        />
      </div>
      <style jsx>{`
        .grid-container {
          display: flex;
          flex-direction: column;
        }
        .equal-sign {
          font-size: 3rem;
          color: var(--primary);
          line-height: 1;
        }
      `}</style>
    </CalcBlock>
  );
}
