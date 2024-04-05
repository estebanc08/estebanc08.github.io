import { useState } from 'react'
import React from "react";
import PersonalHomepage from "./sites/EstebanCalvo/Homepage"
import Homepage from './components/Homepage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/EstebanCalvo" element={<PersonalHomepage />} />
      </Routes>
    </Router>
  )
}

export default App
