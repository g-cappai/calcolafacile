import DefaultLayout from "../components/layouts/default-layout";
import Link from "next/link";
const TITLE = "Pagina non trovata",
  DESC = ["Contenuto non trovato"];

export default function PageNotFound() {
  return (
    <>
      <DefaultLayout title={TITLE} desc={DESC}>
        <div className="container empty-page-center">
          <p>
            <b>Oops! La pagina che cerchi non esiste</b>
          </p>
          <p>
            Torna alla{" "}
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
        </div>
      </DefaultLayout>
    </>
  );
}
