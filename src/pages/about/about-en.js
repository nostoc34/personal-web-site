import NavigationEN from "../../layout/navbar/navbar-en";
import MainEN from "./main/main-en";
import HobbiesEN from "./hobbies/hobbies-en";
import Footer from "../../layout/footer/footer";
import { ScrollRestoration } from "react-router-dom";

function AboutEN() {
  return (
    <div>
      <ScrollRestoration />
      <NavigationEN />
      <MainEN />
      <HobbiesEN />
      <Footer />
    </div>
  );
}

export default AboutEN;
