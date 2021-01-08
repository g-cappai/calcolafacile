import Header from "../modules/header";
import Footer from "../modules/footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
