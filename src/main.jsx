import React from 'react';
import ReactDOM from 'react-dom/client';
import Houses from './Houses';
import './index.css';

let a = 'Amir';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Houses />

    {/* <HelloMessage name={a} age='29'>
      <p>children element 1</p>
    </HelloMessage>

    <HelloMessage name='Puskar' age='30'>
      <button type='button' value='click'>
        Click
      </button>
    </HelloMessage>

    <HelloMessage name='Pravesh' age='31' /> */}
  </React.StrictMode>
);
