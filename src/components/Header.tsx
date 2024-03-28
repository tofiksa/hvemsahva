import React, { useEffect, useState } from 'react';
import { getImageFromSupabaseStorage } from '../services/retrieveFromStorage';
import NavBar from './NavBar';

const Header: React.FC = () => {
  const [easterEggs, setEasterEggs] = useState<any>('');

  useEffect(() => {
    getImageFromSupabaseStorage('eastereggs.png').then((url: any) => {
      setEasterEggs(url);
    });
  }, []);

  return (
    <>
      <div id="header">
        <h1>
          Velkommen til Påskeeggjakt 2024
          {easterEggs && (
            <img
              src={easterEggs.signedUrl}
              height="50"
              width="50"
              alt="easteregg"
            />
          )}
        </h1>
      </div>
      <NavBar />
    </>
  );
};

export default Header;
