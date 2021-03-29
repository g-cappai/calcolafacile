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
          <div className="empty-page-center">
            <div className="text-container">
              <h2 className="mb-1">CalcolaFacile.it</h2>{" "}
              <p>Tutti i tuoi calcoli a portata di mano.</p>
            </div>
          </div>
        </main>
      </DefaultLayout>
      <style jsx>
        {`
          .text-container {
          }
          .empty-page-center {
            padding: 1rem;
            height: 100%;
            text-align: center;
            font-size: 170%;
            color: white;
            background-color: var(--primary);
          }

          main {
            width: 100%;
          }
          h2 {
            font-weight: 500;
          }
        `}
      </style>
    </>
  );
}
