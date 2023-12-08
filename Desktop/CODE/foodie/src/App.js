import "./App.css";
import Home from "./components/Home";
import MenuPage from "./components/MenuPage";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/get-started" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
