import Header from "../modules/header";
import Footer from "../modules/footer";
import HeadComponent from "../modules/head";

export default function DefaultLayout({ title, meta_desc, children }) {
  return (
    <>
      <HeadComponent title={title} meta_desc={meta_desc} />
      <div className="page-wrapper">
        <Header />
        <div className="page-content">{children}</div>
        {/* Cookie Banner */}
        <Footer />
      </div>
      <style jsx>{`
        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .page-content {
          flex-grow: 1;
        }
      `}</style>
    </>
  );
}
