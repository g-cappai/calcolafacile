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
      <Header />
      <div>{children}</div>
      {/* Cookie Banner */}
      <Footer />
    </>
  );
}
