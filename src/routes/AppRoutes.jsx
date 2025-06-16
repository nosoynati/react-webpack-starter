import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import NotFound from "../pages/not-found/NotFound";
import Contact from "../pages/contacto/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />}/>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
