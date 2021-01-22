import DefaultLayout from "../../components/layouts/default-layout";
import ContactUsBlock from "../../components/modules/block-contactus";

export default function CalcPageTemplate({ title, desc, children }) {
  return (
    <DefaultLayout title={title} desc={desc}>
      {/* <ContactUsBlock /> */}
      {/* {AD} */}
      <div className="container py-1">
        <h1 className="my-1">{title}</h1>
        <p className="mb-1">{desc}</p>
        <style jsx>
          {`
            h1 {
              font-weight: 500;
              font-size: 1.45rem;
            }
          `}
        </style>
      </div>
      {/* {AD} */}
      {children}
    </DefaultLayout>
  );
}
