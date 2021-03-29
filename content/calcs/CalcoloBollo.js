import { useState } from "react";
import useForm from "../../hooks/useForm";

import CalcBlock from "../../components/modules/block-calc";
import Input from "../../components/elements/Input";
import Select from "../../components/elements/Select";

import {
  regioni,
  misurePotenza,
  classiEuro,
  tariffeBollo,
} from "../data/calcoloBollo";

export default function CalcoloBollo({ pageTitle }) {
  const [{ regione, potenza, classeEuro, misura }, getValidatedInput] = useForm(
    {
      regione: {
        isRequired: true,
        defaultValue: "default",
        validation: [
          {
            condition: (val) => Object.values(regioni).includes(val),
            msg: "Seleziona una regione.",
          },
        ],
      },
      potenza: {
        isRequired: true,
        validation: [
          {
            condition: (val) => val > 0,
            msg: "Inserisci un numero maggiore di 0.",
          },
        ],
      },
      classeEuro: {
        defaultValue: classiEuro.E0,
      },
      misura: {
        defaultValue: misurePotenza.CV,
      },
    }
  );
  const [resMsg, setResMsg] = useState("");

  const generateResMsg = (regione, potenza, classeEuro, misura) => {
    let price = calculatePrice(regione, potenza, classeEuro, misura);
    setResMsg(
      <>
        <div className="result-msg">
          Il costo del bollo auto è di{" "}
          <div className="highlight-res">
            <span className="price">{price}</span>
            {`€ /anno*`}
          </div>{" "}
        </div>
        <div className="footnote mt-1">
          *Il valore è da ritenersi indicativo. Il costo del bollo auto può
          variare a seconda di diversi fattori. Per conoscere la cifra esatta
          rivolgersi all'ufficio competente.
        </div>
        <style jsx>
          {`
            .price {
              font-weight: 700;
              font-size: 1.5rem;
            }
            .result-msg {
              font-size: 1.1rem;
            }
          `}
        </style>
      </>
    );
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    const validValues = getValidatedInput();

    if (validValues) {
      const { regione, potenza, classeEuro, misura } = validValues;
      generateResMsg(regione, potenza, classeEuro, misura);
    }
  };

  return (
    <CalcBlock
      result={resMsg}
      pageTitle={pageTitle}
      handleCalculate={handleCalculate}
      size="s"
    >
      <div className="content-grid">
        <Select
          options={Object.values(regioni)}
          placeholder="Seleziona una regione"
          labelText="Regione di residenza intestatario"
          {...regione}
        />
        <Input
          labelText="Potenza"
          symbol={Object.values(misurePotenza)}
          symbolValue={misura.value}
          symbolOnChange={misura.onChange}
          type="number"
          numMin="0"
          {...potenza}
        />
        <Select
          options={Object.values(classiEuro)}
          labelText="Categoria Euro"
          {...classeEuro}
        />
      </div>
      <style jsx>{`
        .content-grid {
          display: grid;
          row-gap: 1rem;
        }
      `}</style>
    </CalcBlock>
  );
}

const elaboratePotenza = (misura, potenza) => {
  if (misura === misurePotenza.CV) return potenza / 1.36;
  return potenza;
};

const fetchRates = (regione, classeEuro) => {
  let group = tariffeBollo.find((group) => group.regioni.includes(regione))
    ?.tariffe;
  let prices = group.find((classe) => classe.classeEuro.includes(classeEuro))
    ?.prezzi;
  return prices;
};

const calculatePiedmont = (misura, potenza, regione, classeEuro) => {
  let price;
  let power = elaboratePotenza(misura, potenza);
  let [low, medium, high] = fetchRates(regione, classeEuro);
  let lowLimit, highLimit;
  if (power > 130) {
    [lowLimit, highLimit] = high;
  } else if (power <= 130 && power > 100) {
    [lowLimit, highLimit] = medium;
  } else {
    [lowLimit, highLimit] = low;
  }
  if (power <= 100) {
    price = power * lowLimit;
  } else {
    price = 100 * lowLimit;
    power = power - 100;
    price += power * highLimit;
  }
  return price;
};

const calculatePrice = (regione, potenza, classeEuro, misura) => {
  let price;
  if (regione === regioni.PIEMONTE) {
    price = calculatePiedmont(misura, potenza, regione, classeEuro);
  } else {
    let [lowLimit, highLimit] = fetchRates(regione, classeEuro);
    let power = elaboratePotenza(misura, potenza);
    if (power <= 100) {
      price = power * lowLimit;
    } else {
      price = 100 * lowLimit;
      power = power - 100;
      price += power * highLimit;
    }
  }

  price = Math.round(price)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  return price;
};
