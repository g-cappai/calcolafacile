import DefaultLayout from "../components/layouts/default-layout";
import PopupNotification from "../components/elements/popup-notification";
import axios from "axios";

import Input from "../components/elements/Input";
import Select from "../components/elements/Select";
import Textarea from "../components/elements/Textarea";

import useForm from "../hooks/useForm";

import { useRouter } from "next/router";
import { useState } from "react";

const TITLE = "Contatti",
  META_DESC = "Segnalaci nuovi calcoli, idee o problemi del sito";

export default function ContactPage() {
  const getQueryCat = () => {};
  // getQueryPage

  const [
    { contactName, contactEmail, subject, message, privacyCheck },
    getValidatedInput,
  ] = useForm({
    contactName: {
      validation: [
        {
          condition: (val) => val.length < 61,
          msg: "Puoi inserire fino a 60 caratteri.",
        },
      ],
    },
    contactEmail: {
      isRequired: true,
      validation: [
        {
          condition: /.{1,}@[^.]{1,}/,
          msg: "Inserire una email valida.",
        },
      ],
    },
    subject: {
      defaultValue: getQueryCat(),
    },
    message: {
      isRequired: true,
      validation: [
        {
          condition: (val) => val.length >= 30,
          msg: "Inserisci almeno 30 caratteri.",
        },
      ],
    },
    privacyCheck: {
      isRequired: true,
      validation: [
        {
          condition: (val) => val.length >= 30,
          msg: "Inserisci almeno 30 caratteri.",
        },
      ],
    },
  });

  const loading = false;

  return (
    <>
      <DefaultLayout title={TITLE} meta_desc={META_DESC}>
        {/* {!showPopup || (
          <PopupNotification
            showPopup={setShowPopup}
            success={popupContent.success}
            message={popupContent.message}
          />
        )} */}

        <main className="container my-1 py-1">
          <div className="contact-container">
            <h1 className="page-title">Contatti </h1>
            <p>
              C'è un calcolo che vorresti sempre avere a portata di mano?
              Un'idea per il sito? Oppure vuoi segnalarci un bug? <br />{" "}
              <strong>Non esitare a contattarci!</strong>
            </p>
            <hr />
            <div className="requested mb-1">Campo richiesto *</div>
            <Input labelText="Nome" {...contactName} />
            <Input labelText="Email" {...contactEmail} />
            <Select
              options={["Nuovo calcolo", "Bug", "Altro"]}
              labelText="Categoria"
              {...subject}
            />
            <Textarea labelText="Messaggio" {...message} />
            <Input type="checkbox" {...privacyCheck} />
            <label htmlFor="privacy-check" className="privacy-text">
              {" "}
              Acconsento al trattamento dei miei dati personali ai sensi
              dell'articolo 13 del Regolamento (UE) 2016/679.
              {/* Leggi l'informativa. */}
            </label>
            <button
              id="contact-submit"
              className="submit mt-1"
              type="submit"
              onClick={(e) => handleSubmit(e)}
              disabled={loading}
            >
              {loading ? <span className="loading"></span> : "Invia"}
            </button>
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
              cursor: ${loading ? "inherit" : "pointer"};
              letter-spacing: 0.7pt;
              border: 1px solid
                ${loading ? "var(--primary-less-light)" : "var(--primary)"};
              color: #fff;
              background-color: ${loading
                ? "var(--primary-less-light)"
                : "var(--primary)"};
            }

            #contact-submit:hover {
              opacity: ${loading ? "100%" : "90%"};
            }

            #contact-submit:focus {
              outline: none;
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
              outline: none;
            }

            input:focus,
            textarea:focus,
            select:focus {
              box-shadow: 0 0 0 2px var(--primary-lesser-light);
              border: 1px solid var(--primary);
            }

            .contact-container {
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

            .privacy-text {
              font-weight: 400;
              font-size: 1rem;
            }

            .requested {
              color: var(--negative);
            }

            span.requested {
              font-size: 90%;
            }

            .error-border {
              border-color: var(--negative);
            }

            .no-margin-bottom {
              margin-bottom: 0;
            }
          `}</style>
        </main>
      </DefaultLayout>
    </>
  );
}
