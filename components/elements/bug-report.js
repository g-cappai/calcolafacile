import Link from "next/link";

export default function BugReport() {
  return (
    <div>
      <Link href="/contatti?cat=bug">
        <a>Segnala problema</a>
      </Link>
      <style jsx>
        {`
          div {
            font-size: 82%;
            margin-top: 0.3rem;
            text-align: center;
          }

          a {
            color: rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </div>
  );
}
