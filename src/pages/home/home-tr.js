import NavigationTR from "../../layout/navbar/navbar-tr";
import HeaderTR from "./header/header-tr";
import BannerTR from "./banner/banner-tr";
import VisionTR from "./vision/vision-tr";
import Footer from "../../layout/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function HomeTR() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationTR />
      <HeaderTR />
      <BannerTR />
      <VisionTR />
      <Footer />
    </div>
  );
}

export default HomeTR;
