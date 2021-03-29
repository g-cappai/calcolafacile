export default function Sidebar() {
  return (
    <>
      <aside className="my-1">
        <div className="aside-content">
          {/* ADS ecc (?)
           */}
        </div>
      </aside>
      <style jsx>{`
        aside {
          min-width: 250px;
          width: 250px;
          border-left: 1px solid lightgray;
          padding: 1rem;
          margin-left: 1rem;
        }

        .aside-content {
          position: sticky;
          top: calc(1rem + 60px);
        }

        h2 {
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        @media (max-width: 992px) {
          aside {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
