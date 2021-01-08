import DefaultLayout from "../../components/layouts/default-layout";
import CalcMeta from "../../components/modules/calc-meta";
import ContactUsBlock from "../../components/modules/block-contactus";

export default function CalcPageTemplate({ title, desc, children }) {
  return (
    <DefaultLayout>
      {/* {AD} */}
      <CalcMeta title={title} desc={desc} />
      {/* {AD} */}
      {children}
      <ContactUsBlock />
    </DefaultLayout>
  );
}
