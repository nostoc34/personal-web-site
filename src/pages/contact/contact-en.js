import NavigationEN from "../../layout/navbar/navbar-en";
import CBannerEN from "./cbanner/cbanner-en";
import CMainEN from "./cmain/cmain-en";
import Footer from "../../layout/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function ContactEN() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationEN />
      <CBannerEN />
      <CMainEN />
      <Footer />
    </div>
  );
}

export default ContactEN;
