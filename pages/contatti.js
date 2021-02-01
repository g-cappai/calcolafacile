//!!!!MESSY PAGE!!!! Pro tip: Think -> Project -> Realize || TO BE REVIEWED

import DefaultLayout from "../components/layouts/default-layout";
import PopupNotification from "../components/modules/popup-notification";
import axios from "axios";
import Link from "next/link";

import { useRouter } from "next/router";
import { useState } from "react";

const TITLE = "Contatti",
  META_DESC = "Segnalaci nuovi calcoli, idee o problemi del sito";

export default function ContactPage() {
  const queryCategory = useRouter().query["cat"];

  //STATE
  const [name, setName] = useState("");
  const [emailSender, setEmailSender] = useState("");
  const [subject, setSubject] = useState(queryCategory ? "Bug report" : "Idea");
  const [message, setMessage] = useState("");
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  //Popup Notification
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    success: "",
    message: "",
  });

  //Validation
  const [validMail, setValidMail] = useState("unset");
  const [validMessage, setValidMessage] = useState("unset");
  const [validPrivacy, setValidPrivacy] = useState("unset");

  const validateEmail = (email) => {
    const mailRegex = /.{1,}@[^.]{1,}/;
    let isValid = mailRegex.test(email);
    setValidMail(isValid);
  };

  const validateMessage = (msg) => {
    let longEnough = msg.length >= 30;
    setValidMessage(longEnough);
  };

  const validatePrivacy = (privCheck) => {
    setValidPrivacy(privCheck);
  };

  //Submit handling
  const handleSubmit = (e) => {
    e.preventDefault();
    const messageData = {
      name,
      senderMail: emailSender,
      subject,
      content: message,
    };
    //Validate everything
    validateEmail(emailSender);
    validateMessage(message);
    validatePrivacy(privacyCheck);
    //Hide eventual popup
    setShowPopup(false);

    if (
      // Everything is valid and is different from "unset"
      validMail &&
      validMail != "unset" &&
      validMessage &&
      validMessage != "unset" &&
      validPrivacy &&
      validPrivacy != "unset"
    ) {
      //Set loading state
      setLoading(true);
      //Send post request
      axios({
        method: "POST",
        url: "/api/contact",
        data: messageData,
      })
        .then((response) => {
          if (response.data.status === "success") {
            //ResetState
            setName("");
            setEmailSender("");
            setMessage("");
            setPrivacyCheck(false);
            //Reset Validation
            setValidMail("unset");
            setValidMessage("unset");
            setValidPrivacy("unset");
            //No more loading
            setLoading(false);
            setPopupContent({
              success: true,
              message: "Messaggio inviato correttamente.",
            });
          } else {
            setLoading(false);
            setPopupContent({
              success: false,
              message: (
                <span>
                  Si è verificato un errore. <br />
                  Controlla che l'email inserita sia valida e riprova.
                </span>
              ),
            });
          }
        })
        .catch((error) => {
          setLoading(false);
          setPopupContent({
            success: false,
            message: "Si è verificato un errore. Riprova più tardi.",
          });
        })
        .finally(() => setShowPopup(true));
    } else {
      document.getElementById("email-label").scrollIntoView();
    }
  };

  return (
    <>
      <DefaultLayout title={TITLE} meta_desc={META_DESC}>
        {!showPopup || (
          <PopupNotification
            showPopup={setShowPopup}
            success={popupContent.success}
            message={popupContent.message}
          />
        )}

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
            <form noValidate>
              <p>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="nome"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </p>
              <p>
                <label htmlFor="email" id="email-label">
                  Email<span className="requested">*</span>
                </label>
                <input
                  className={validMail ? "" : "error-border"}
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmailSender(e.target.value)}
                  onBlur={() => validateEmail(emailSender)}
                  value={emailSender}
                />
              </p>
              {validMail ? (
                ""
              ) : (
                <span className="requested mb-1">
                  Inserisci una email valida.
                </span>
              )}
              <p>
                <label htmlFor="subject">Categoria</label>
                <select
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="Idea">Nuovo calcolo</option>
                  <option value="Bug report">Problema</option>
                  <option value="Varie">Altro</option>
                </select>
              </p>
              <p className="no-margin-bottom">
                <label htmlFor="message">
                  Messaggio<span className="requested">*</span>
                </label>
                <textarea
                  className={validMessage ? "" : "error-border"}
                  id="message"
                  name="message"
                  rows="10"
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => validateMessage(message)}
                  value={message}
                ></textarea>
              </p>
              {validMessage ? (
                ""
              ) : (
                <span className="requested mb-2">
                  Inserisci almeno 30 caratteri.
                </span>
              )}
              <p className="privacy">
                <input
                  type="checkbox"
                  aria-label="Spunta privacy policy"
                  id="privacy-check"
                  checked={privacyCheck}
                  onChange={(e) => {
                    setValidPrivacy(e.target.checked);
                    setPrivacyCheck(() => !privacyCheck);
                  }}
                />
                <label htmlFor="privacy-check" className="privacy-text">
                  {" "}
                  Acconsento al trattamento dei miei dati personali ai sensi
                  dell'articolo 13 del Regolamento (UE) 2016/679.
                  {/* Leggi l'informativa. */}
                </label>
              </p>
              {validPrivacy ? (
                ""
              ) : (
                <span className="requested mb-1">
                  Per proseguire accetta il trattamento dei dati personali.
                </span>
              )}
              <button
                id="contact-submit"
                className="submit mt-1"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                disabled={loading}
              >
                {loading ? <span className="loading"></span> : "Invia"}
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
              outline-color: var(--primary);
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
