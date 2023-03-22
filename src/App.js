import { Route, Routes} from "react-router-dom";
import "./App.scss";
import HomeTR from "./pages/home/home-tr";
import HomeEN from "./pages/home/home-en";
import AboutTR from "./pages/about/about-tr";
import AboutEN from "./pages/about/about-en";
import ContactTR from "./pages/contact/contact-tr";
import ContactEN from "./pages/contact/contact-en";

function App() {

  return (
    <Routes>
        <Route path="/" element={<HomeTR />} />
        <Route path="/en" element={<HomeEN />} />
        <Route path="/hakkimda" element={<AboutTR />} />
        <Route path="/about" element={<AboutEN />} />
        <Route path="/iletisim" element={<ContactTR />} />
        <Route path="/contact" element={<ContactEN />} />
      </Routes>
  );
}

export default App;
