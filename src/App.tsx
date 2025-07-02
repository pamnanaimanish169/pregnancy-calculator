import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path=":lang" element={<Home />} />
            <Route path="about/:lang" element={<About />} />
            <Route path="contact/:lang" element={<Contact />} />
            <Route path="calculator/:lang" element={<PregnancyCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
