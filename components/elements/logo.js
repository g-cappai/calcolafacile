import isHome from "../../utils/isHome";
import Link from "next/link";
export default function Logo() {
  return (
    <>
      <Link href="/">
        {isHome() ? (
          <a>
            <h1 className="logo">CalcolaFacile.it</h1>
          </a>
        ) : (
          <a>
            <h2 className="logo">CalcolaFacile.it</h2>
          </a>
        )}
      </Link>
      <style jsx>{`
        .logo {
          color: var(--primary);
          margin: 0;
          font-weight: 500;
          font-size: 1.2rem;
        }
      `}</style>
    </>
  );
}
