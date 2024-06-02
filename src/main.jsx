import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

//video 9 -  Use of prop-types
const root = ReactDOM.createRoot(document.getElementById('root'));

const friends = ['Ram', 'Shyam', 'Hari', 'Sita'];
root.render(
  <React.StrictMode>
    <App name='adil' age={29} isMarried={false} arr={friends} />
  </React.StrictMode>
);
