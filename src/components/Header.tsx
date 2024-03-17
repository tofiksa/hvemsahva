import React, { useEffect, useState } from 'react';
import { getImageFromStorage } from '../services/retrieveFromStorage';

const Header: React.FC = () => {
    const [easterEggs, setEasterEggs] = useState<any>('');
  
    useEffect(() => {
      getImageFromStorage('eastereggs.png').then((url: any) => {
        setEasterEggs(url);
      });
    }, []);

    return (
      <div id="header">
        <h1>
          Velkommen til Påskeeggjakt 2024
          {easterEggs && (
            <img src={easterEggs.publicUrl} height="50" width="50" alt="easteregg" />
          )}
        </h1>
      </div>
    );
  };
  
  

export default Header;