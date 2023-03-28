import NavigationEN from "./navbar/navbar-en";
import HeaderEN from "./header/header-eng";
import BannerEN from "./banner/banner-en";
import VisionEN from "./vision/vision-en";
import Footer from "./footer/footer";
import { ScrollRestoration } from "react-router-dom";

function HomeEN() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationEN />
      <HeaderEN />
      <BannerEN />
      <VisionEN />
      <Footer />
    </div>
  );
}

export default HomeEN;
