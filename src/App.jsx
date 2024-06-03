import './App.css';

// function App1() {
//   return (
//     <>
//       <h1>Sanish Karki</h1>
//       <App2 />
//     </>
//   );
// }

// function App2() {
//   return (
//     <>
//       <h1>Learning react is cool</h1>
//     </>
//   );
// }

//  OR  yo garda chai main.jsx ma " import { App1,App2 } from './App'; " garnu parxa

export function App1() {
  return (
    <>
      <h1>Sanish Karki</h1>
      <App2 />
    </>
  );
}

function App2() {
  return (
    <>
      <h1>Learning react is cool</h1>;
    </>
  );
}

// export { App1 }; // yo leknu mann xaina bhane function keyword agadi export lekhda ni hunxa
