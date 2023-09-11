import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import "./components/Header/index";
import Header from "./components/Header/index";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/оНас" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
