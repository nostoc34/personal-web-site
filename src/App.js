import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hakkimda" element={<About/>}/>
            <Route path="/iletisim" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
