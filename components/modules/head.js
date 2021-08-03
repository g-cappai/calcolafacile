import Head from 'next/head';
import isHome from '../../utils/isHome';
import { useRouter } from 'next/router';

const siteName = 'calcolafacile.it',
  siteMotto = 'Tutti i tuoi calcoli a portata di mano',
  gTagManagerHead = (
    <>
      {/* <!-- Google Tag Manager --> */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NH8M5H7');`,
        }}
      />
      {/* <!-- End Google Tag Manager --> */}
    </>
  );

export default function HeadComponent({ title, meta_desc }) {
  const path = useRouter().asPath.replace(/\?.*/, '');

  return (
    <Head>
      <script
        data-ad-client="ca-pub-2638875088789645"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      <title>
        {isHome()
          ? `CalcolaFacile.it - ${siteMotto}`
          : `${title} | ${siteName}`}
      </title>
      {meta_desc ? <meta name="description" content={meta_desc} /> : ''}
      {gTagManagerHead}
      <link rel="canonical" href={`https://${siteName}${path}`} />
    </Head>
  );
}
