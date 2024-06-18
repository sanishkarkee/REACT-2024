// import React, { Component } from 'react';
// import ChildComponent from './ChildComponent';

// export default class ParentComponent extends Component {
//   ParentMethod = (childName, surname) => {
//     alert(
//       'Hello from parent component. Name is passed from child to parent: ' +
//         childName +
//         ' ' +
//         surname
//     );
//   };

//   render() {
//     return (
//       <div>
//         <ChildComponent callMethod={this.ParentMethod} />
//       </div>
//     );
//   }
// }

//---------- Functional component ----------

import React from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  let ParentMethod = (childName, surname) => {
    alert(`Hello from parent. Name= ${childName} & surname= ${surname}`);
  };

  return (
    <div>
      <ChildComponent callMethod={ParentMethod} />
    </div>
  );
}
