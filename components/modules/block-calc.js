import Link from "next/link";

export default function CalcBlock({
  explanation,
  examples,
  result,
  handleCalculate,
  handleClear,
  pageTitle,
  hasClearBtn,
  size = "m",
  children,
}) {
  const dynamicwidth = () => {
    const widths = {
      s: "360px",
      m: "640px",
      l: "",
    };

    return widths[size];
  };
  return (
    <>
      <section className="my-2">
        <div className="card shadow-1">
          {explanation && (
            <div className="explanation primary">{explanation}</div>
          )}
          {examples && <div className="example mb-1">{examples}</div>}
          <form onSubmit={handleCalculate} autoComplete="off">
            <div className="procedure">{children}</div>
            {(hasClearBtn || handleCalculate) && (
              <div className="mt-1">
                {hasClearBtn && (
                  <button
                    className="clear shadow-focus"
                    onClick={handleClear}
                    type="button"
                  >
                    Cancella
                  </button>
                )}

                {handleCalculate && (
                  <button className="submit shadow-focus" type="submit">
                    Calcola
                  </button>
                )}
              </div>
            )}
          </form>
          {result ? <div className="result mt-1">{result}</div> : ""}
        </div>
        <div className="bug-report">
          <Link href={`/contatti?cat=bug&page=${pageTitle}`}>
            <a>Segnala problema</a>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .mt-1 {
          margin-top: 1.5rem;
        }

        button {
          padding: 0.5rem;
          font-size: 1rem;
          border: none;
          background: transparent;
          margin: 0 0.35rem;
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
          border: 1px solid #ccc;
          width: ${dynamicwidth()};
          max-width: 100%;
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
        }

        .bug-report {
          font-size: 82%;
          margin-top: 0.3rem;
          text-align: center;
        }

        .bug-report a {
          color: rgba(0, 0, 0, 0.55);
        }

        .bug-report a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
