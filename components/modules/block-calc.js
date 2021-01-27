import BugReport from "../elements/bug-report";

export default function CalcBlock({
  explanation,
  examples,
  procedure,
  result,
  handleCalculate,
  handleClear,
}) {
  return (
    <>
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
        </div>
        <BugReport />
      </section>

      <style jsx>{`
        button {
          padding: 0.5rem;
          font-size: 1rem;
          border: none;
          background: transparent;
          margin-right: 5px;
          border-radius: 5px;
          cursor: pointer;
          letter-spacing: 0.7pt;
          border: 1px solid var(--primary);
        }

        button:focus {
          outline: none;
        }

        .clear {
          color: var(--primary);
        }

        .clear:hover {
          background-color: var(--primary-light);
        }

        .submit {
          color: #fff;
          background-color: var(--primary);
        }

        .submit:hover {
          opacity: 90%;
        }

        .card {
          text-align: center;
          width: fit-content;
          border: 1px solid #ccc;
        }

        .example {
          color: rgba(0, 0, 0, 0.7);
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
    </>
  );
}
