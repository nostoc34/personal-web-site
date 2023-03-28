import NavigationTR from "../home/navbar/navbar-tr";
import CBannerTR from "./cbanner/cbanner-tr";
import CMainTR from "./cmain/cmain-tr";
import Footer from "../home/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function ContactTR() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationTR />
      <CBannerTR />
      <CMainTR />
      <Footer />
    </div>
  );
}

export default ContactTR;
