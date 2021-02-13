import DefaultLayout from "../../components/layouts/default-layout";
import ContactUsBlock from "../../components/modules/block-contactus";

import Link from "next/link";

export default function CalcPageTemplate({
  title,
  desc,
  meta_desc,
  more_text,
  children,
}) {
  return (
    <DefaultLayout title={title} meta_desc={meta_desc}>
      <ContactUsBlock />
      {/* {AD} */}
      <main className="container  my-1 py-1">
        <h1 className="page-title">{title}</h1>
        <div className="mb-1">{desc}</div>

        {/* {AD} */}
        {children}
        <div className="my-1">{more_text}</div>

        <p>
          Vuoi segnalarci delle inesattezze o hai nuove idee per il sito?
          <Link href="\contatti">
            <a> Contattaci! </a>
          </Link>
        </p>
      </main>
    </DefaultLayout>
  );
}
