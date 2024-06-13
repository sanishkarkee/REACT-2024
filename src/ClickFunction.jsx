// 1)------Functional Component
// function ClickFunction() {
//   function Hellofunction() {
//     alert('Click event activated using Functional component');
//   }

//   return (
//     <>
//       <input type='button' value='Click' onClick={Hellofunction} />
//     </>
//   );
// }

// 2)-------Class Component
// import React, { Component } from 'react';

// export default class ClickFunction extends Component {
//   HelloFunction() {
//     alert('Click event activated using Class component');
//   }
//   render() {
//     return (
//       <>
//         <input type='button' value='click' onClick={this.HelloFunction} />
//       </>
//     );
//   }
// }

// 3)------ Passing arguements (use Arrow Function)
function ClickFunction(props) {
  const HelloFunction = (name) => {
    alert('Hello ' + name);
  };

  return (
    <>
      <input
        type='button'
        value='Click'
        onClick={() => HelloFunction(props.name)}
      />
    </>
  );
}

export default ClickFunction;
