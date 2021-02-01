import DefaultLayout from "../../components/layouts/default-layout";
import ContactUsBlock from "../../components/modules/block-contactus";

export default function CalcPageTemplate({ title, desc, meta_desc, children }) {
  return (
    <DefaultLayout title={title} meta_desc={meta_desc}>
      <ContactUsBlock />
      {/* {AD} */}
      <main className="container  my-1 py-1">
        <h1 className="page-title">{title}</h1>
        <div className="mb-1">
          {desc.map((sentence, i) => {
            return <p key={sentence.slice(3) + i}>{sentence}</p>;
          })}
        </div>
      </main>
      {/* {AD} */}
      {children}
    </DefaultLayout>
  );
}
