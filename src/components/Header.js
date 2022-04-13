import React from 'react';
import EASTER_EGGS from '../images/eastereggs.png';



export const Header = () => {
    return (
    <div id="header">
    <h1>
        Velkommen til Påskeeggjakt
        <img src={EASTER_EGGS} height="50" width="50" alt="easteregg"/>
    </h1>
    </div>);
}