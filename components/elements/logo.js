import { useRouter } from "next/router";

export default function Logo() {
  const currentPath = useRouter().pathname;
  return (
    <>
      {currentPath == "/" ? (
        <h1 className="logo">CalcolaFacile.it</h1>
      ) : (
        <h2 className="logo">CalcolaFacile.it</h2>
      )}
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
