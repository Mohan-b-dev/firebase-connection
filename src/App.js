// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormPage from "./FormPage";
import ViewData from "./ViewData";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <Link to="/" className="text-white px-2">
              Form
            </Link>
            <Link to="/view-data" className="text-white px-2">
              View Data
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/view-data" element={<ViewData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
