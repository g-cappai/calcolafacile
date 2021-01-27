import DefaultLayout from "../components/layouts/default-layout";
import Link from "next/link";

import { useRouter } from "next/router";

const TITLE = "Contatti",
  META_DESC = "Segnalaci nuovi calcoli o eventuali problemi del sito";

export default function ContactPage() {
  const queryCategory = useRouter().query["cat"];

  return (
    <>
      <DefaultLayout title={TITLE} meta_desc={META_DESC}>
        <main className="container my-1 py-1">
          <div className="conctact-container">
            <h1 className="page-title">Contatti </h1>
            <p>
              C'è un calcolo che vorresti sempre avere a portata di mano?
              Un'idea per il sito? Oppure vuoi segnalarci un bug? <br />{" "}
              <strong>Non esitare a contattarci!</strong>
            </p>
            <hr />
            <div className="requested mb-1">Campo richiesto *</div>
            <form>
              <p>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="name" id="nome" />
              </p>
              <p>
                <label htmlFor="email">
                  Email<span className="requested">*</span>
                </label>
                <input type="email" name="email" id="email" required />
              </p>
              <p>
                <label htmlFor="subject">Categoria</label>
                <select name="subject" id="subject" value={queryCategory}>
                  <option value="new_calc">Nuovo calcolo</option>
                  <option value="bug">Problema</option>
                  <option value="more">Altro</option>
                </select>
              </p>
              <p>
                <label htmlFor="message">
                  Messaggio<span className="requested">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </p>
              <p className="privacy">
                <input
                  type="checkbox"
                  aria-label="Spunta privacy policy"
                  required
                />
                <span className="privacy-text">
                  {" "}
                  Acconsento al trattamento dei miei dati personali ai sensi
                  dell'articolo 13 del Regolamento (UE) 2016/679.
                  {/* Leggi l'informativa. */}
                </span>
              </p>
              <button id="contact-submit" className="submit mt-1" type="submit">
                Invia
              </button>
            </form>
          </div>
          <style jsx>{`
            form {
              display: flex;
              flex-direction: column;
            }

            p > * {
              width: 100%;
            }

            textarea {
              resize: vertical;
              font-family: var(--main-fonts);
            }

            textarea,
            select {
              font-size: 1rem;
            }

            #contact-submit {
              width: 100%;
              max-width: 420px;
              margin: 1rem auto auto;
              padding: 0.5rem;
              font-size: 1rem;
              border: none;
              background: transparent;
              border-radius: 5px;
              cursor: pointer;
              letter-spacing: 0.7pt;
              border: 1px solid var(--primary);
              color: #fff;
              background-color: var(--primary);
            }

            #contact-submit:hover {
              opacity: 90%;
            }

            label {
              font-weight: 500;
              font-size: 90%;
            }

            input,
            textarea,
            select {
              border: 1px solid #999;
              border-radius: 5px;
              padding: 0.3rem;
              background-color: rgba(0, 0, 0, 0.02);
              font-weight: 400;
              outline-color: var(--primary);
            }

            .conctact-container {
              max-width: 768px;
              height: fit-content;
              margin: 0 auto;
            }

            .privacy {
              display: grid;
              grid-template-columns: 40px auto;
            }

            .privacy input {
              margin-top: 0.3rem;
              width: auto;
              zoom: 1.5;
              cursor: pointer;
            }

            .requested {
              color: var(--secondary);
            }
          `}</style>
        </main>
      </DefaultLayout>
    </>
  );
}
