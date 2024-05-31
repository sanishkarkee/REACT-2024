import './App.css';

let name = 'Sanish Karki';

const carObj = {
  name: 'Hyndai Venue',
  color: 'Gray',
  make: '2008',
};

let a = 10;
let msg = '';

if (a > 5) {
  msg = 'Welcome';
} else {
  msg = 'Bye';
}

function App() {
  return (
    <>
      <h1>Ifelse loop is used outside the JSX Or use Ternary Operator</h1>
      <p>Result of the loop: {msg}</p>

      <h1>Use of Ternary operator inside JSX</h1>
      <p>{a > 15 ? 'Its valid ' : 'Its not valid'}</p>

      <h1>Object concept.</h1>

      <p>
        Result of the Object concept: Car details: {carObj.name} |{' '}
        {carObj.color} | {carObj.make}
      </p>

      <h1>{name}</h1>
      <h4>{5 + 5}</h4>
      <p>This section is for writing HTML code.</p>
    </>
  );
}

export default App;
