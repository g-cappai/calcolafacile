import Link from "next/link";
import DefaultLayout from "../components/layouts/default-layout";

const TITLE = "",
  META_DESC =
    "CalcolaFacile.it ti permette di svolgere tanti tipi di calcoli in modo semplice e veloce!";

export default function Home() {
  return (
    <>
      <DefaultLayout title={TITLE} meta_desc={META_DESC}>
        <main>
          <div className="container empty-page-center">
            <h2 className="mb-1">CalcolaFacile.it è appena nato!</h2>
            <p>
              Il sito nasce con l'obbiettivo di raggruppare e rendere sempre
              disponibili tanti calcoli utili.
            </p>
            <p>
              Al momento non c'è molto da vedere, ma saremo presto pronti a
              ricevere suggerimenti e idee per nuovi calcoli.
            </p>
            <p>
              Intanto però perché non provi il nostro{" "}
              <Link href="/calcoli/calcolo-percentuale">
                <a>calcolo della percentuale</a>
              </Link>
              ?
            </p>
          </div>
        </main>
      </DefaultLayout>
      <style jsx>
        {`
          h2 {
            font-weight: 500;
            font-size: 2rem;
          }

          .container {
            text-align: center;
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
}
