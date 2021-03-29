import Logo from "../elements/logo";
import MobileMenu from "./MobileMenu";
import LinkList from "../elements/LinkList";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <>
      <header className="shadow-1">
        <div className="container">
          <nav>
            <Logo />
            <ul className="desktop-menu hide-on-mobile">
              <li>
                <span className="dropdown-voice">
                  Calcoli <span className="chev-down">&#x25BC;</span>
                </span>
                <div className="dropdown-content topless-shadow">
                  <LinkList />
                </div>
              </li>
              <li>
                <Link href="/contatti">
                  <a className="norm-link">Contatti</a>
                </Link>
              </li>
            </ul>
            <a
              className="hamburger-icon clickable-icon show-on-mobile"
              onClick={() => toggleMenu(!isMenuOpen)}
            >
              &#9776;
            </a>
          </nav>
        </div>
        <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </header>
      <style jsx>{`
        .chev-down {
          font-size: 55%;
          margin: 0.2rem;
          color: darkgray;
        }

        .dropdown-content {
          position: absolute;
          display: none;
          top: 60px;

          padding: 0.5rem 1rem;
          background-color: var(--primary-light);
          border-radius: 0 0 8px 8px;
        }

        .desktop-menu li:hover > .dropdown-content {
          display: block;
        }

        .desktop-menu li:hover {
          background-color: var(--primary-light);
          color: var(--primary);
        }

        .dropdown-voice {
          padding: 1rem;
          cursor: default;
        }

        .norm-link {
          padding: 1rem;
        }

        .desktop-menu li {
          display: inline-block;
          padding: 1rem 0;
        }

        .topless-shadow {
          box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 8px -2px,
            rgba(0, 0, 0, 0.06) 0px 4px 6px -2px;
        }

        li {
          margin: 0;
        }

        nav {
          height: 100%;
          max-width: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hamburger-icon {
          font-size: 1.7rem;
          font-weight: 900;
          color: var(--primary);
        }

        .container {
          height: 60px;
          display: flex;
          align-items: center;
        }

        header {
          position: fixed;
          z-index: 1000;
          border-bottom: 1px solid lightgray;
          max-width: 100%;
          width: 100%;
          background-color: white;
        }
      `}</style>
    </>
  );
}
