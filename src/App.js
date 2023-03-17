import { Route, Routes} from "react-router-dom";
import "./App.scss";
import MainContext from "./MainContext";
import HomeTR from "./pages/home/home-tr";
import HomeEN from "./pages/home/home-en";
import AboutTR from "./pages/about/about-tr";
import AboutEN from "./pages/about/about-en";
import ContactTR from "./pages/contact/contact-tr";
import ContactEN from "./pages/contact/contact-en";

function App() {

  const data = {};

  return (
    <MainContext.Provider value={data}>
      <Routes>
        <Route path="/" element={<HomeTR />} />
        <Route path="/en" element={<HomeEN />} />
        <Route path="/hakkimda" element={<AboutTR />} />
        <Route path="/about" element={<AboutEN />} />
        <Route path="/iletisim" element={<ContactTR />} />
        <Route path="/contact" element={<ContactEN />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
