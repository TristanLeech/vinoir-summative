import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/outsource" element={<Outsource />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
