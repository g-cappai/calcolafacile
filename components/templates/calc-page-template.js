import DefaultLayout from "../../components/layouts/default-layout";
import ContactUsBlock from "../../components/modules/block-contactus";

import Link from "next/link";

export default function CalcPageTemplate({ title, meta_desc, slug, children }) {
  return (
    <DefaultLayout title={title} meta_desc={meta_desc} slug={slug}>
      <ContactUsBlock />
      {/* {AD} */}
      <main className="container  my-1 py-1">
        <h1 className="page-title">{title}</h1>
        {/* {AD} */}
        {children}
        <p>
          Vuoi segnalarci delle inesattezze o hai nuove idee per il sito?
          <Link href="/contatti">
            <a> Contattaci! </a>
          </Link>
        </p>
      </main>
    </DefaultLayout>
  );
}
