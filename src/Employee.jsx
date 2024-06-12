// import React, { Component } from 'react';

//  1) data directly state mai define garera use gariyeko case

// export default class Employee extends Component {
//   constructor() {
//     super();

//     this.state = {
//       //set the data in state / initialization
//       name: 'Learning never ends',
//       //   name: 1,

//       age: 23,
//       surname: 'ansari',
//     };
//   }

//   changeName() {
//     this.setState({
//       //change the date in state
//       name: 'Welcome to the channel',
//       //   name: this.state.name + 1,

//       age: 33,
//       surname: 'qureshi',
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.age}</h1>
//         <h1>{this.state.surname}</h1>
//         <button
//           onClick={() => {
//             this.changeName();
//           }}
//         >
//           click
//         </button>
//       </>
//     );
//   }
// }

//--- 2) If data is passed through props-----

import React, { Component } from 'react';

export default class Employee extends Component {
  // There are 2 ways to initialize the state
  //1) Using constructor
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     //set the data in state / initialization
  //     name: this.props.name,

  //     age: 23,
  //     surname: 'ansari',
  //   };
  // }

  // 2) Without using the constructor
  state = {
    name: 'Learning never ends',
    age: 23,
    surname: 'ansari',
  };

  changeName() {
    this.setState({
      //change the date in state
      name: 'Welcome to the channel',
      //   name: this.state.name + 1,

      age: 33,
      surname: 'qureshi',
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.surname}</h1>
        <button
          onClick={() => {
            this.changeName();
          }}
        >
          click
        </button>
      </>
    );
  }
}
