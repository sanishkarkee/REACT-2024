import React from 'react';
import ReactDOM from 'react-dom/client';
import Employee from './Employee';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* 1) data directly state mai define garera use gariyeko case */}
    {/* <Employee />  */}

    {/* 2) If data is passed through props */}
    <Employee name='adil' />
  </React.StrictMode>
);
/*
Main point to remember (STATE = object):  ( Class component:State / Functional component: Hooks )

1) Props ko data readonly hunxa, props data ma change garna lai STATE use garinxa
2) State data are stored as variables
3) State ko data change/modify bhaye paxi component chai re-render ot re display hunxa

*/
