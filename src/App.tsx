import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FrontPage } from './templates/FrontPage';
import CluesPage from './templates/CluesPage';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BowserPage from './templates/BowserPage';
import BleierPage from './templates/BleierPage';
import NoraPage from './templates/NoraPage';
import VeggiePage from './templates/VeggiePage';
import HighScorePage from './templates/HighScorePage';
import { getImagesFromSupabaseStorage } from './services/retrieveFromStorage';
import React from 'react';

function App() {
  return <Pages />;
}

const Pages = () => {
  useEffect(() => {
    if (localStorage.getItem('images') === null) {
      getImagesFromSupabaseStorage().then((resp) => {});
    }
  }, []);

  return (
    <Routes>
      <Route path="/clues" element={<CluesPage />} />
      <Route path="/egg1" element={<BowserPage />} />
      <Route path="/egg2" element={<BleierPage />} />
      <Route path="/egg3" element={<NoraPage />} />
      <Route path="/egg4" element={<VeggiePage />} />
      <Route path="/highscore" element={<HighScorePage />} />
      <Route path="/" element={<FrontPage />} />
    </Routes>
  );
};

export default App;
