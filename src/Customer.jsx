// -----For Functional components

// ----- Type 1:
// function Customer({ name, age }) {
//   return (
//     <>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </>
//   );
// }

// ----- Type 2:
// function Customer(props) {
//   const { name, age } = props;
//   return (
//     <>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </>
//   );
// }

// -----For Class components

import React, { Component } from 'react';

// class Customer extends Component {
//   render() {
//     let { name, age } = this.props;
//     return (
//       <>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//       </>
//     );
//   }
// }

// State destructuring
class Customer extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Kumar',
      age: 27,
    };
  }
  render() {
    const { name, age } = this.state;
    return (
      <>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </>
    );
  }
}

export default Customer;
