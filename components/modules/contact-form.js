export default function ContactForm() {
  return (
    <>
      <div className="dark-overlay">
        <div className="card">Ciao</div>
      </div>
      <style jsx>{`
        .dark-overlay {
          height: 100vh;
          width: 100%;
          position: fixed;
          background-color: rgba(0, 0, 0, 0.5);
          top: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .contact-card {
          background-color: white;
        }
      `}</style>
    </>
  );
}
