import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import NotFound from "./Pages/NotFound";
import Navbar from "./Pages/Navbar";
import Mypdf from "./Pages/Mypdf";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="about" element={<About />} />
        <Route path="pdf" element={<Mypdf />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
