import Document, { Html, Head, Main, NextScript } from "next/document";

const gTagManagerBody = (
  <>
    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NH8M5H7"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>`,
      }}
    />
    {/* <!-- End Google Tag Manager (noscript) --> */}
  </>
);

class MyDocument extends Document {
  render() {
    return (
      <Html lang="it">
        <Head />
        <body>
          {gTagManagerBody}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
