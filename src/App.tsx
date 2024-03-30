import './input.css';
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
import QuizPage from './templates/QuizPage';
import { getImagesFromSupabaseStorage } from './services/retrieveFromStorage';
import React from 'react';
import NavBar from './components/NavBar';
import { getImageFromSupabaseStorage } from './services/retrieveFromStorage';

function App() {
  const [easterEggs, setEasterEggs] = useState<any>('');

  useEffect(() => {
    getImageFromSupabaseStorage('eastereggs.png').then((url: any) => {
      setEasterEggs(url);
    });
  }, []);

  return (
    <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
      <div className="flex flex-row">
        <div className="py-1 bg-white">
          <h1>Velkommen til Påskeeggjakt 2024</h1>
        </div>
        {easterEggs && (
          <div className="py-1">
            <img
              src={easterEggs.signedUrl}
              height="50"
              width="50"
              alt="easteregg"
            />
          </div>
        )}
      </div>
      <NavBar />

      <Pages />
    </main>
  );
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
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/" element={<FrontPage />} />
    </Routes>
  );
};

export default App;
