export default function CalcBlock({
  explanation,
  examples,
  procedure,
  result,
  handleCalculate,
  handleClear,
}) {
  return (
    <section className="container pb-2">
      <div className="card">
        <div className="explanation primary">{explanation}</div>
        <div className="example mb-1">{examples}</div>
        <form onSubmit={handleCalculate}>
          <div className="procedure">{procedure}</div>
          <div className="mt-1">
            <button className="clear" onClick={handleClear} type="button">
              Cancella
            </button>
            <button className="submit" type="submit">
              Calcola
            </button>
          </div>
        </form>
        {result ? <div className="result mt-1">{result}</div> : ""}

        <style jsx>{`
          button {
            padding: 0.5rem;
            font-size: 1rem;
            border: none;
            background: transparent;
            margin-right: 5px;
            border-radius: 5px;
            cursor: pointer;
            letter-spacing: 0.7px;
          }

          button:focus {
            outline: none;
          }

          .clear {
            color: var(--primary);
            border: 1px solid var(--primary);
          }

          .clear:hover {
            background-color: var(--primary-light);
          }

          .submit {
            color: #fff;
            background-color: var(--primary);
          }

          .submit:hover {
            opacity: 80%;
          }

          .card {
            padding: 1rem 1.5rem 1.5rem 1.5rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            text-align: center;
            width: fit-content;
            margin: 0 auto;
          }

          .example {
            opacity: 85%;
            font-size: 90%;
            margin-top: 0.5rem;
          }

          .explanation {
            font-size: 1rem;
            font-weight: 600;
          }

          .procedure {
            font-size: 1.2rem;
            line-height: 2.3;
          }
        `}</style>
      </div>
    </section>
  );
}
