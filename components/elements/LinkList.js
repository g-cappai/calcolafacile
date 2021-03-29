import Link from "next/link";
import { useRouter } from "next/router";

const _ = require("lodash");

export default function LinkList() {
  const pageSlug = useRouter().query.calcSlug;

  return (
    <>
      <ul>
        {linkList.map(({ name, slug }) => (
          <li key={_.uniqueId("calc-li_")}>
            {pageSlug != slug ? (
              <Link href={`/calcoli/${slug}`}>
                <a className="norm-link">{name}</a>
              </Link>
            ) : (
              <span className="active">{name}</span>
            )}
          </li>
        ))}
      </ul>
      <style jsx>{`
        a {
          font-size: 0.9rem;
        }

        ul {
          list-style: none;
        }

        li {
          margin-left: 0;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .active {
          color: var(--primary-less-light);
          font-weight: 500;
          cursor: default;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  );
}

const linkList = [
  { name: "Calcolo bollo auto", slug: "calcolo-bollo-auto" },
  { name: "Calcolo percentuale", slug: "calcolo-percentuale" },
  { name: "Convertitore CV-KW", slug: "convertitore-cv-kw" },
];
