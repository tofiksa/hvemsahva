import React from 'react';
import Header from '../components/Header';
import { Personalia } from '../model/personaliaJson.js';
import 'survey-react/modern.min.css';
//import { StylesManager } from 'survey-react';


  
export const FrontPage = () => {
    return(
        <div id="container">
            <div><Header/></div>
                <Personalia/>
        </div>
    );
}