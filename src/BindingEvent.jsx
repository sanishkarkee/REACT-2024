// // There are 3 ways to bind event handlers

// import React, { Component } from 'react';

// export default class BindingEvent extends Component {
//   constructor() {
//     super();

//     //----Type1- Binding click event with HandleEvent function
//     this.HandleEvent = this.HandleEvent.bind(this);

//     this.state = {
//       name: 'Adil',
//     };
//   }

//   //   HandleEvent() {
//   //     this.setState({
//   //       name: 'Sanish',
//   //     });
//   //   }

//   //Type 3 (Arrow Function) - if we dont need to use bind() method Or use bind inside constructor OR dont want to use bind in button tag
//   HandleEvent = () => {
//     this.setState({
//       name: 'Sanish',
//     });
//   };

//   render() {
//     return (
//       <>
//         <h1>{this.state.name}</h1>
//         {/*----Type 1
//         <button type='button' onClick={this.HandleEvent}>
//           Click
//         </button> */}

//         {/* ----Type 2
//        <button type='button' onClick={this.HandleEvent.bind(this)}>
//           Click
//         </button> */}

//         {/* ----Type 3 */}
//         <button type='button' onClick={this.HandleEvent}>
//           Click
//         </button>
//       </>
//     );
//   }
// }

// ------------------------------------Revison------------------------------------
import React, { Component } from 'react';

export default class BindingEvent extends Component {
  constructor() {
    super();

    // TYPE 2 (Binding inside the constructor)
    // this.HandleEvent = this.HandleEvent.bind(this);

    this.state = {
      name: 'Sanish',
    };
  }

  //   HandleEvent() {
  //     this.setState({
  //       name: 'Karki',
  //     });
  //   }

  //   TYPE 3 (Using Arrow Function instead)
  HandleEvent = () => {
    this.setState({
      name: 'Karki',
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        {/* TYPE 1  (Binding on the button tag itself)
        <button type='button' onClick={this.HandleEvent.bind(this)}>
          Click
        </button> */}

        {/* TYPE 2   (Binding inside the constructor)
        <button type='button' onClick={this.HandleEvent}>
          Click
        </button>  */}

        {/* TYPE 3  (Using Arrow Function instead)*/}
        <button type='button' onClick={this.HandleEvent}>
          Click
        </button>
      </>
    );
  }
}
