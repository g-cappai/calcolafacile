import { useState } from "react";

import checkInput from "../../utils/commaDotConverter";
import rightArticleFor from "../../utils/rightArticleSelector";

import CalcPageTemplate from "../../components/templates/calc-page-template";
import CalcBlock from "../../components/modules/block-calc";
import Value from "../../components/elements/input-calcvalue";

export const TITLE = "Calcolo della percentuale",
  DESC = (
    <>
      {" "}
      <p>
        Utilizza la calcolatrice per trovare la percentuale di un numero oppure
        il rapporto tra due numeri sfruttando le formule inverse.
      </p>{" "}
      <p>
        Puoi calcolare uno sconto o un aumento in percentuale semplicemente
        compilando i primi due campi.{" "}
      </p>
    </>
  ),
  MORE_TEXT = (
    <>
<<<<<<< HEAD
      <h2 class="code-line">Cos’è la percentuale?</h2>
=======
      <h3 class="code-line">
        <a id="Cos_la_percentuale_0"></a>Cos’è la percentuale?
      </h3>
>>>>>>> 00a5ccea12f69e76a09b0b87af8c7a10c2e1d075
      <p class="has-line-data" data-line-start="2" data-line-end="3">
        La percentuale è il <strong>numero di parti</strong> di un intero di
        riferimento <strong>prese in considerazione</strong> dopo che l’intero è
        stato diviso in cento parti. Viene usata quando si devono confrontare
        due grandezze e nonostante se ne faccia largo uso, non sempre ne viene
        compreso al “100%” il funzionamento.
      </p>
      <p class="has-line-data" data-line-start="4" data-line-end="12">
        Per capire di cosa si tratta facciamo un esempio.
        <br />
        Possiedo 10 biglie di cui 5 di colore giallo e voglio conoscere{" "}
        <strong>qual è la percentuale</strong> rappresentata da queste ultime.
        <br />
        Innanzitutto dovrò <strong>determinare l’intero di riferimento</strong>.
        In questo caso io voglio sapere quante{" "}
        <strong>tra le biglie che possiedo</strong> sono gialle. Quindi l’intero
        che prenderò come riferimento sarà il totale delle mie biglie, ovvero{" "}
        <strong>10</strong>.<br />
        Posso quindi dire che <strong>10 è il 100% delle mie biglie</strong>.
        <br />
        Ora il calcolo è semplice, perché come si può vedere le biglie gialle
        sono 5, ovvero <strong>la metà</strong> delle biglie in mio possesso.
        <br />
        Quindi se immagino di dividere tutte le mie biglie fino ad avere un
        totale di <strong>100 pezzi uguali</strong>, so già che la metà di quei
        pezzi saranno gialli.
        <br />
        In altre parole, <strong>su 100 pezzi 50 saranno gialli: il 50%</strong>
        .<br />
        Ma se le biglie gialle fossero state ad esempio 4 e il totale 25? Be’ in
        quel caso è meglio conoscere alcuni semplici calcoli.
      </p>
<<<<<<< HEAD
      <h2 class="code-line">
        <a id="Come_si_calcola_la_percentuale_di_un_numero_13"></a>Come si
        calcola la percentuale di un numero?
      </h2>
=======
      <h3 class="code-line">
        <a id="Come_si_calcola_la_percentuale_di_un_numero_13"></a>Come si
        calcola la percentuale di un numero?
      </h3>
>>>>>>> 00a5ccea12f69e76a09b0b87af8c7a10c2e1d075
      <p class="has-line-data" data-line-start="15" data-line-end="16">
        Per ottenere la percentuale di un numero dovrò conoscere due cose: la
        percentuale che voglio calcolare, appunto, e il numero che voglio usare
        come intero di riferimento. Dopodiché dividerò l’intero per cento e lo
        moltiplicherò per la percentuale espressa in centesimi.
      </p>
      <p class="has-line-data" data-line-start="17" data-line-end="22">
        Esempio: voglio calcolare quanti cl di succo d’arancia sono presenti
        effettivamente nella mia bevanda.
        <br />
        Il brick contiene 20cl di liquido e sul fronte ha scritto: “Con il 10%
        di succo d’arancia”.
        <br />
        Adesso formuliamo la domanda: a quanto equivale il 10% di 20cl?
        <br />
        Per saperlo dividiamo i 20cl in 100 parti (20/100 = 0,2). Ora abbiamo
        cento parti del valore di 0,2. Ma a noi servono solo 10 di quelle
        parti.Moltiplichiamo quindi 0,2 per 10 volte. (0,2 x 10 = 2) Adesso
<<<<<<< HEAD
        sappiamo che il 10% di 20cl è 2cl.
        <br /> Forse è meglio farsi una spremuta!
=======
        sappiamo che il 10% di 20cl è 2cl. Forse è meglio farsi una spremuta!
>>>>>>> 00a5ccea12f69e76a09b0b87af8c7a10c2e1d075
        <br />
        Per generalizzare possiamo quindi{" "}
        <strong>calcolare la percentuale con la seguente formula</strong>:
      </p>
      <ul>
        <li class="has-line-data" data-line-start="23" data-line-end="25">
<<<<<<< HEAD
          <strong> a / 100 x b = n </strong>
=======
          a / 100 x b = n
>>>>>>> 00a5ccea12f69e76a09b0b87af8c7a10c2e1d075
        </li>
      </ul>
      <p class="has-line-data" data-line-start="25" data-line-end="26">
        Dove <strong>a</strong> rappresenta l’intero di riferimento e{" "}
        <strong>b</strong> la percentuale espressa in centesimi.
      </p>
      <p class="has-line-data" data-line-start="27" data-line-end="34">
        Grazie a questa formula possiamo poi recuperare le{" "}
        <strong>formule inverse</strong>.<br />
        Per fare questo riprendiamo l’esempio delle biglie. Nell’ultima domanda
        volevamo sapere a quale percentuale corrispondessero le nostre 4 biglie
        gialle sul totale di 25 biglie in nostro possesso.
        <br />
        Per trovare questa formula basterà una semplice equivalenza.
        <br />
        Tra 4 e 25 infatti <strong>c’è lo stesso rapporto</strong> che tra X e
        100, che non sono altro che le rappresentazioni in centesimi degli
        stessi valori.
        <br />
        Scriviamo l’equivalenza: 4 : 25 = X : 100 → 4 x 100 / 25 = 16
        <br />
        Scopriamo così che il 16% delle mie biglie è giallo!
        <br />
        Generalizziamo usando la seguente{" "}
        <strong>formula inversa per calcolare la percentuale</strong> espressa
        in centesimi:
      </p>
      <ul>
        <li class="has-line-data" data-line-start="35" data-line-end="37">
<<<<<<< HEAD
          <strong> a : b = X : 100 → a x 100 / b = X </strong>
=======
          a : b = X : 100 → a x 100 / b = X
>>>>>>> 00a5ccea12f69e76a09b0b87af8c7a10c2e1d075
        </li>
      </ul>
      <p class="has-line-data" data-line-start="37" data-line-end="38">
        Con <strong>a</strong> che rappresenta la parte di intero di cui
        vogliamo conoscere la percentuale espressa in centesimi, e{" "}
        <strong>b</strong> il nostro intero di riferimento.
      </p>
      <p class="has-line-data" data-line-start="39" data-line-end="42">
        Ora rimane solo un’altra formula, e il metodo per scoprirla è lo stesso.
        <br />
        Stavolta sappiamo che le nostre biglie gialle sono 15 e sappiamo anche
        che sono il 12% delle nostre biglie totali. Ma quante biglie abbiamo
        allora?
        <br />
        Stavolta l’equivalenza è leggermente diversa, ma seguendo lo stesso
        ragionamento sui rapporti tra i quattro valori possiamo arrivare alla
        seguente conclusione: 15 : X = 12 : 100 → 15 x 100 / 12 = 125
      </p>
      <p class="has-line-data" data-line-start="43" data-line-end="45">
        Ecco fatto! Ora sappiamo che in questa ipotesi le nostre biglie totali
        sono 125.
        <br />
        Riscriviamo quindi la{" "}
        <strong>
          formula per calcolare il totale rispetto alla percentuale
        </strong>
        :
      </p>
      <ul>
        <li class="has-line-data" data-line-start="46" data-line-end="48">
<<<<<<< HEAD
          <strong> a : X = b : 100 → a x 100 / b = X </strong>
=======
          a : X = b : 100 → a x 100 / b = X
>>>>>>> 00a5ccea12f69e76a09b0b87af8c7a10c2e1d075
        </li>
      </ul>
      <p class="has-line-data" data-line-start="48" data-line-end="49">
        Dove <strong>a</strong> rappresenta la nostra porzione di intero e{" "}
        <strong>b</strong> l’equivalente percentuale espressa in centesimi.
      </p>
      <p class="has-line-data" data-line-start="50" data-line-end="51">
        Con questo è tutto per le percentuali. Speriamo di essere stati d’aiuto.
      </p>
    </>
  ),
  META_DESC =
    "Calcola online la percentuale di un numero, lo sconto o l'aumento in percentuale. Oppure utilizza le formule inverse.";

function Calc0() {
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
      moreText={MORE_TEXT}
      page={TITLE}
      handleCalculate={handleCalculate}
      handleClear={handleClear}
    />
  );
}

export default function CalcoloPercentuale() {
  return (
    <CalcPageTemplate
      title={TITLE}
      desc={DESC}
      meta_desc={META_DESC}
      more_text={MORE_TEXT}
    >
      <Calc0 />
    </CalcPageTemplate>
  );
}
