import NavigationTR from "../home/navbar/navbar-tr";
import MainTR from "./main/main-tr";
import HobbiesTR from "./hobbies/hobbies-tr";
import Footer from "../home/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function AboutTR() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationTR />
      <MainTR />
      <HobbiesTR />
      <Footer />
    </div>
  );
}

export default AboutTR;
