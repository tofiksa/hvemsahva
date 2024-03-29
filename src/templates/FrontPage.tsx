import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Personalia } from '../model/personaliaJson';
import 'survey-react/modern.min.css';
import { HistorienPage } from './HistorienPage';
import { getImageFromSupabaseStorage } from '../services/retrieveFromStorage';
import NavBar from '../components/NavBar';
//import { StylesManager } from 'survey-react';

export const FrontPage = () => {
  const [easterEggs, setEasterEggs] = useState<any>('');

  useEffect(() => {
    getImageFromSupabaseStorage('eastereggs.png').then((url: any) => {
      setEasterEggs(url);
    });
  }, []);

  return (
    <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
      <div className="sm:w-1 md:1/4 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky top-0 p-4 w-full">
          <ul className="flex sm:flex-col overflow-hidden content-center justify-between"></ul>
        </div>
      </div>
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
        <div className="container">
          <HistorienPage />
        </div>
        <Personalia />
      </main>
    </div>
  );
};
