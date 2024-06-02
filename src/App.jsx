import PropTypes from 'prop-types';
import './App.css';

//video 9 - Use of prop-types
function App(props) {
  return (
    <>
      <h1>Hey:{props.name}</h1>
      <h1>Hey: {props.age}</h1>
      {/* <h1>Maritial status:{props.isMarried.toString()} </h1>  OR */}
      <h1>Maritial status:{String(props.isMarried)} </h1>
      <h1>{props.arr}</h1>
      <h1>{props.arr[0]}</h1>
    </>
  );
}

//-----Props datatype  
App.propTypes = {
  name: PropTypes.string.isRequired, //props ma name chai aba pass garnai parxa
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  arr: PropTypes.array,
};

//-----Default props value
App.defaultProps = {
  name: 'This is default vale of name',
};

export default App;
