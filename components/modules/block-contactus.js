import Link from "next/link";

export default function ContactUsBlock() {
  return (
    <div className="outer-container">
      <div className="container py-2 text">
        <span>CalcolaFacile.it è in cerca di idee. </span>{" "}
        <Link href="/contatti">
          <a className="highlight"> Segnalaci nuovi calcoli.</a>
        </Link>
      </div>
      <style jsx>
        {`
          span {
            display: inline-block;
          }

          .outer-container {
            background-color: rgba(239, 239, 239, 0.9);
          }

          .text {
            text-align: center;
            font-size: 105%;
          }

          .text p,
          a {
            color: #333333;
          }

          .highlight {
            line-height: 1.2;
            font-weight: 500;
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
}
