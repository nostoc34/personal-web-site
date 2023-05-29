import NavigationTR from "../../layout/navbar/navbar-tr";
import CBannerTR from "./cbanner/cbanner-tr";
import CMainTR from "./cmain/cmain-tr";
import Footer from "../../layout/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function ContactTR() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationTR />
      <CBannerTR />
      <CMainTR />
      <Footer rights="Tüm hakları saklıdır."/>
    </div>
  );
}

export default ContactTR;
