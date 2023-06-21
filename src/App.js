import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="relative overflow-hidden bg-back">
      <a
        href="/JulyResume2023.pdf"
        target="_blank"
        className="fixed top-4 right-4 lg:top-8 lg:right-8 object-cover px-6 py-2 rounded-full text-2xl lg:text-4xl font-medium hover:scale-105 transition-all duration-300 ease-in-out hover:text-gray bg-back-fronter text-semigray backdrop-blur bg-opacity-60 z-[999]"
        rel="noreferrer"
      >
        My Resume (CV)
      </a>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
