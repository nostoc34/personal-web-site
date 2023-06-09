import NavigationEN from "../../layout/navbar/navbar-en";
import HeaderEN from "./header/header-eng";
import BannerEN from "./banner/banner-en";
import VisionEN from "./vision/vision-en";
import Footer from "../../layout/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function HomeEN() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationEN />
      <HeaderEN />
      <BannerEN />
      <VisionEN />
      <Footer rights="All rights reserved."/>
    </div>
  );
}

export default HomeEN;
