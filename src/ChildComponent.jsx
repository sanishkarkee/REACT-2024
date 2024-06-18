// import React, { Component } from 'react';

// export default class ChildComponent extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is child component</h1>
//         {/* <button onClick={this.props.callMethod}>Click</button> */}

//         {/* button with parameter */}
//         <button onClick={() => this.props.callMethod('Adil', 'Ansari')}>
//           Click
//         </button>
//       </div>
//     );
//   }
// }

//---------- Functional component----------

import React from 'react';

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.callMethod('Adil', 'Ansari')}>Click</button>
    </div>
  );
}
