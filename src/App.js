import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ContactMe from "./Pages/ContactMe";
import NotFound from "./Pages/NotFound";
import Navbar from "./Pages/Navbar";
import Mypdf from "./Pages/Mypdf";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import PowerFitness from "./Pages/Projects/PowerFitness";
import WareHouse from "./Pages/Projects/WareHouse";
import MrTools from "./Pages/Projects/MrTools";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<ContactMe />} />
        <Route path="about" element={<About />} />
        <Route path="pdf" element={<Mypdf />} />
        <Route path="fitness" element={<PowerFitness />} />
        <Route path="warehouse" element={<WareHouse />} />
        <Route path="tools" element={<MrTools />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
