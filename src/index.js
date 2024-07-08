import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Lb1 } from './Lb1';
import { Lb2 } from './Lb2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Lb1></Lb1><hr></hr>
    <Lb2></Lb2>
  </React.StrictMode>
);

reportWebVitals();
