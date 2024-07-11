import React, { useState } from 'react';

function StyleComponent() {
  const [state, setState] = useState(false);

  // // Case: 2 & 3;
  // let obj1 = {
  //   color: 'blue',
  //   backgroundColor: 'orange',
  // };

  // let obj2 = {
  //   fontSize: '50px',
  //   fontFamily: 'cooper',
  // };

  //  Case: 4;

  return (
    <>
      {/* Case: 1 - direct inline styling*/}
      {/* <h1 style={'color:red'}>Learning never ends</h1> */}

      {/* Case: 2 - styling through objects*/}
      {/* <h1 style={obj1}>Learning never ends.</h1> */}

      {/* Case: 3 - styling through multiple objects*/}
      {/* <h1 style={{ ...obj1, ...obj2 }}>Learning never ends.</h1> */}

      {/* Case: 4 - styling based on certain conditions using states*/}
      <button style={obj} onClick={changeState}>
        Click
      </button>
    </>
  );
}

export default StyleComponent;
