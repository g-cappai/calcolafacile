import Head from "next/head";
import isHome from "../../utils/isHome";

const siteName = "CalcolaFacile.it",
  siteMotto = "Tutti i tuoi calcoli a portata di mano";

export default function HeadComponent({ title, meta_desc }) {
  return (
    <Head>
      <title>
        {isHome() ? `${siteName} - ${siteMotto}` : `${title} | ${siteName}`}
      </title>
      {meta_desc ? <meta name="description" content={meta_desc} /> : ""}
    </Head>
  );
}
