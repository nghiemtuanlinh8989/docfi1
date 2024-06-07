import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Newspage from "./Page/Newspage";

  
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/New1" element={<Newspage />} />
        
      </Routes>
    </Router>
  );
}

export default App;



