import NavigationTR from "../../layout/navbar/navbar-tr";
import MainTR from "./main/main-tr";
import HobbiesTR from "./hobbies/hobbies-tr";
import Footer from "../../layout/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function AboutTR() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationTR />
      <MainTR />
      <HobbiesTR />
      <Footer rights="Tüm hakları saklıdır."/>
    </div>
  );
}

export default AboutTR;
