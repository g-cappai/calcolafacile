import Header from "../modules/header";
import Footer from "../modules/footer";
import Head from "next/head";
import isHome from "../../utils/isHome";

const siteName = "CalcolaFacile.it",
  siteMotto = "Tutti i tuoi calcoli a portata di mano",
  homeDesc =
    "CalcolaFacile.it ti permette di svolgere tanti tipi di calcoli in modo semplice e veloce!";

export default function DefaultLayout({ title, desc, children }) {
  return (
    <>
      <Head>
        <title>
          {isHome() ? `${siteName} - ${siteMotto}` : `${title} | ${siteName}`}
        </title>
        <meta name="description" content={isHome() ? homeDesc : desc} />
      </Head>
      <div className="page-wrapper">
        <Header />
        <main className="my-1">{children}</main>
        {/* Cookie Banner */}
        <Footer />
      </div>
      <style jsx>{`
        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </>
  );
}
