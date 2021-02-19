import Head from "next/head";
import isHome from "../../utils/isHome";
import { useRouter } from "next/router";

const siteName = "calcolafacile.it",
  siteMotto = "Tutti i tuoi calcoli a portata di mano";

export default function HeadComponent({ title, meta_desc, slug }) {
  const path = useRouter().pathname;
  return (
    <Head>
      <title>
        {isHome()
          ? `CalcolaFacile.it - ${siteMotto}`
          : `${title} | ${siteName}`}
      </title>
      {meta_desc ? <meta name="description" content={meta_desc} /> : ""}
      <link
        rel="canonical"
        href={`https://${siteName}${slug ? `/calcoli/${slug}` : path}`}
      />
    </Head>
  );
}
