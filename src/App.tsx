import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Home from "./pages/Home";
import PregnancyCalculator from "./components/PregnancyCalculator";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<PregnancyCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
