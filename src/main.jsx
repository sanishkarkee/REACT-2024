import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyClass } from './MyClass';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {
      <MyClass name='Adil' age={23}>
        <h2>Child props no 1</h2>
      </MyClass>

      /*<MyClass name='Anit' age={22}>
      <button type='submit'>Submit</button>
    </MyClass>

    <MyClass name='Kumar' age={26}>
      <ol>
        <li>Ali</li>
        <li>Zain</li>
        <li>noman</li>
      </ol>
    </MyClass> */
    }

    {/* <MyClass2 /> */}
  </React.StrictMode>
);
