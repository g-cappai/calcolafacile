import Logo from "../elements/logo";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Logo />
          </nav>
        </div>
      </header>
      <style jsx>{`
        .container {
          height: 60px;
          display: flex;
          align-items: center;
        }
        header {
          border-bottom: 1px solid lightgray;
        }
      `}</style>
    </>
  );
}
