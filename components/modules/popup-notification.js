import { useEffect } from "react";

export default function PopupNotification({ success, message, showPopup }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      showPopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        <div className="notify shadow-2">
          <span className="popup-message">{message}</span>
          <button className="close-btn" onClick={() => showPopup(false)}>
            &times;
          </button>
        </div>
      </div>
      <style jsx>{`
        div {
          height: fit-content;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          padding: 0 1rem;
        }

        .notify {
          font-size: 0.85rem;
          display: flex;
          justify-content: space-between;
          align-content: center;
          color: ${success ? "var(--positive)" : "var(--negative)"};
          top: 1rem;
          max-width: 500px;
          height: fit-content;
          position: relative;
          margin: 0 auto;
          background-color: ${success
            ? "var(--positive-light)"
            : "var(--negative-light)"};
          padding: 1rem;
          border-radius: 5px;
        }

        .close-btn {
          font-size: 2rem;
          line-height: 0.45;
          margin-left: 1rem;
          background-color: ${success
            ? "var(--positive-light)"
            : "var(--negative-light)"};
          border: none;
          outline: none;
          color: ${success ? "var(--positive)" : "var(--negative)"};
        }

        .close-btn:hover {
          opacity: 80%;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
