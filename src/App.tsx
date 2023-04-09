import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FrontPage } from './templates/FrontPage'
import { CluesPage } from './templates/CluesPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clues" element={<CluesPage />} />
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
