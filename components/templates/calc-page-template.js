import DefaultLayout from "../../components/layouts/default-layout";
import ContactUsBlock from "../../components/modules/block-contactus";
import ContactForm from "../../components/modules/contact-form";

export default function CalcPageTemplate({ title, desc, meta_desc, children }) {
  return (
    <DefaultLayout title={title} meta_desc={meta_desc}>
      <ContactUsBlock />
      <ContactForm />
      {/* {AD} */}
      <main className="container  my-1 py-1">
        <h1 className="my-1">{title}</h1>
        <div className="mb-1">
          {desc.map((sentence, i) => {
            return <p key={sentence.slice(3) + i}>{sentence}</p>;
          })}
        </div>
        <style jsx>
          {`
            h1 {
              font-weight: 500;
              font-size: 1.45rem;
            }
          `}
        </style>
      </main>
      {/* {AD} */}
      {children}
    </DefaultLayout>
  );
}
