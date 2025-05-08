import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import MortgageCalculator from './pages/MortgageCalculator';

function App() {
  return (<>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
