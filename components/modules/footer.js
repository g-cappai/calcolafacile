import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="py-2">
        <div className="footer-menu">
          <Link href="/contatti">
            <a className="norm-link">Contatti</a>
          </Link>
        </div>

        <div className=" copy-container">
          <div className="copy ">&copy; 2021 CalcolaFacile.it</div>
        </div>
      </footer>
      <style jsx>{`
        .footer-menu {
          text-align: center;
          padding-bottom: 1rem;
        }

        .copy {
          text-align: center;
          font-size: 80%;
        }

        footer {
          background-color: #ddd;
          height: 90px;
        }
      `}</style>
    </>
  );
}
