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

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/clues" element={<CluesPage />} />
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
