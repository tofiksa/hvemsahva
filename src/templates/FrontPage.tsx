import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Personalia } from '../model/personaliaJson';
import 'survey-react/modern.min.css';
//import { StylesManager } from 'survey-react';

export const FrontPage = () => {
  return (
    <div id="container">
      <Header />
      <Personalia />
    </div>
  );
};
