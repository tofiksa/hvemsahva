import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const ExtBrowserRouter = ({children}) => (
  
  <Router history={history} >
  { children }
  {console.log("History: ",children)}
  </Router>
);

