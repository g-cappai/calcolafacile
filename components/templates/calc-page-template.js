import DefaultLayout from "../../components/layouts/default-layout";
import Sidebar from "../modules/sidebar";

export default function CalcPageTemplate({ title, meta_desc, slug, children }) {
  return (
    <>
      <DefaultLayout title={title} meta_desc={meta_desc} slug={slug}>
        <main className="my-1 py-1  container">
          <h1 className="page-title">{title}</h1>
          {children}
        </main>
        {/* <Sidebar /> */}
        <style jsx>{`
          main {
            flex-grow: 1;
            width: 100%;
          }
        `}</style>
      </DefaultLayout>
    </>
  );
}
