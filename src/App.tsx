import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FrontPage } from './templates/FrontPage'
import CluesPage from './templates/CluesPage';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';
import BowserPage from './templates/BowserPage';
import BleierPage from './templates/BleierPage';
import NoraPage from './templates/NoraPage';
import VeggiePage from './templates/VeggiePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/clues" element={<CluesPage />} />
        <Route path="/egg1" element={<BowserPage />} />
        <Route path="/egg2" element={<BleierPage />} />
        <Route path="/egg3" element={<NoraPage />} />
        <Route path="/egg4" element={<VeggiePage />} />
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
