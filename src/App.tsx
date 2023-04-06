import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FrontPage } from './templates/FrontPage'
import { StartSide } from './templates/StartSide';
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
        <Route path="/quiz" element={<StartSide />} />
        <Route path="/" element={<FrontPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
