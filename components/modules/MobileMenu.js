import Link from "next/link";

import LinkList from "../elements/LinkList";

export default function MobileMenu({ isMenuOpen, toggleMenu }) {
  return (
    <>
      {isMenuOpen && (
        <div
          className="transparent-overlay"
          onClick={() => toggleMenu(!isMenuOpen)}
        ></div>
      )}
      <div className="menu-container show-on-mobile">
        <div className="exit-container">
          <a
            className="clickable-icon exit-btn"
            onClick={() => toggleMenu(!isMenuOpen)}
          >
            &times;
          </a>
        </div>
        <br />
        <div className="link-container">
          <div className="calc-menu">
            <h2>Calcoli</h2>
            <LinkList />
          </div>
        </div>
        <hr />
        <div className="link-container">
          <Link href="/contatti">
            <a className="norm-link">Contatti</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .exit-btn {
          font-size: 3rem;
          color: var(--primary);
          height: 60px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .menu-container {
          z-index: 10;
          position: fixed;
          top: 0;
          right: ${isMenuOpen ? "0" : "-230px"};
          padding: 0 1rem 1rem;
          background-color: white;
          border-left: 1px solid lightgray;
          height: 100vh;
          width: 230px;
          transition: right 0.2s;
        }

        .transparent-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          height: 100vh;
          width: 100vw;
        }

        .link-container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
