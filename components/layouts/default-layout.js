import Header from "../modules/header";
import Footer from "../modules/footer";
import Head from "next/head";
import isHome from "../../utils/isHome";

const siteName = "CalcolaFacile.it",
  siteMotto = "Tutti i tuoi calcoli a portata di mano",
  homeDesc =
    "CalcolaFacile.it ti permette di svolgere tanti tipi di calcoli in modo semplice e veloce!";

export default function DefaultLayout({ title, meta_desc, children }) {
  return (
    <>
      <Head>
        <title>
          {isHome() ? `${siteName} - ${siteMotto}` : `${title} | ${siteName}`}
        </title>
        <meta name="description" content={isHome() ? homeDesc : meta_desc} />
      </Head>
      <div className="page-wrapper">
        <Header />
        <div className="page-content">{children}</div>
        {/* Cookie Banner */}
        <Footer />
      </div>
      <style jsx>{`
        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .page-content {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}
