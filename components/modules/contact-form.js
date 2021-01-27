export default function ContactForm() {
  return (
    <>
      <div className="dark-overlay">
        <div className="card-margin">
          <div className="card">
            <div className="close-btn">
              <button>&times;</button>
            </div>
            <div className="contact-title mb-1">Contattaci </div>
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
                <label htmlFor="subject">Categorie</label>
                <select name="subject" id="subject">
                  <option value="calcolo">Nuovo calcolo</option>
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
                <div className="privacy-text">
                  {" "}
                  Acconsento al trattamento dei miei dati personali ai sensi
                  dell'articolo 13 del Regolamento (UE) 2016/679. Acconsento al
                  trattamento dei miei dati personali ai sensi dell'articolo 13
                  del Regolamento (UE) 2016/679.
                  {/* Leggi l'informativa. */}
                </div>
              </p>
              <button id="contact-submit" className="submit mt-1" type="submit">
                Invia
              </button>
            </form>
          </div>
        </div>
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

        .dark-overlay {
          height: 100%;
          width: 100%;
          position: fixed;
          background-color: rgba(0, 0, 0, 0.5);
          top: 0;
          left: 0;
          z-index: 1000;
          overflow: scroll;
          display: flex;
        }

        .card {
          max-width: 768px;
          height: fit-content;
          margin: 0;
        }

        .card-margin {
          margin: auto;
          padding: 1rem;
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

        .contact-title {
          color: var(--primary);
          font-weight: 500;
          font-size: 2rem;
        }

        .close-btn {
          line-height: 0.5;
          text-align: right;
        }

        .close-btn button {
          font-size: 2rem;
          font-family: serif;
          cursor: pointer;

          padding: 0.3rem;
          border-radius: 50%;
          border: none;
          color: #333;
          line-height: 0.6;
          background: none;
          outline: none;
        }

        .close-btn button:hover {
          background: #efefef;
        }

        .requested {
          color: var(--secondary);
        }
      `}</style>
    </>
  );
}
