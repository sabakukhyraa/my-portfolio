import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/index.css';
import Navbar from './components/Navbar';
import Home from './views/Home'
import Projects from './views/Projects'
import About from './views/About'
import Contact from './views/Contact'

function App() {

  return (
    <div className="relative bg-back">
      <a href="https://www.linkedin.com/in/ali-kerem-ata-11149521a/" className='fixed top-8 right-8 object-cover px-6 py-2 rounded-full text-4xl font-medium hover:scale-105 transition-all duration-300 ease-in-out hover:text-gray bg-back-fronter text-semigray backdrop-blur bg-opacity-60 z-[999]'>Ali Kerem Ata</a>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
