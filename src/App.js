import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer.js";

import About from "./components/pages/About.js";
import Photography from "./components/pages/Photography.js";
import Resume from "./components/pages/Resume.js";
import Contact from "./components/pages/Contact.js";

import "../src/App.css";
import "../src/index.css";

function App() {
  return (
    <Router>

      <Header/>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer/>

      </Router>
  );
}

export default App;

