import './App.css';

let name = 'Sanish Karki';

const carObj = {
  name: 'Hyndai Venue',
  color: 'Gray',
  make: '2008',
};

function App() {
  return (
    <>
      <h1>
        {carObj.name} | {carObj.color} | {carObj.make}
      </h1>
      <h1>{name}</h1>
      <h4>{5 + 5}</h4>
      <p>This section is for writing HTML code.</p>
    </>
  );
}

export default App;
