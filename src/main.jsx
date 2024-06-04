import React from 'react';
import ReactDOM from 'react-dom/client';
import Student from './Student';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Student name='Adil' />
    {/* Component call garnu bhaneko Object create hunu ho  */}
  </React.StrictMode>
);
