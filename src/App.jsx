import { useState } from 'react'
import React from "react";
import Projects from './pages/Projects';
import Homepage from './pages/Homepage';
import SFML from './pages/SFML';
import DynaCV from './pages/DynaCV';
import UFCompass from './pages/UFCompass';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Projects/SFML" element={<SFML/>} />
        <Route path="/Projects/DynaCV" element={<DynaCV/>} />
        <Route path="/Projects/UFCompass" element={<UFCompass/>} />
      </Routes>
    </Router>
  )
}

export default App
