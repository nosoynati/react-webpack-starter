import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.scss";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import Contact from "./components/contacto/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/yvostampoco" element={<About />}></Route>
         {/* <Route path="contact" element={<Contact />}></Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
