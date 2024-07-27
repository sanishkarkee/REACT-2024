// import React, { useState } from 'react';

// function OtherInputs() {
//   const [textArea, setTextArea] = useState('');
//   const [selectMenu, setselectMenu] = useState('USA');
//   const [checked, setChecked] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('TextArea: ', e.target[0].value); //For textArea
//     console.log('Select Menu: ', e.target[1].value); //for Select Menu
//     console.log('Check Option : ', e.target[2].checked); //for check Option
//   };

//   return (
//     <>
//       <h2>Current data in state: {textArea}</h2>
//       <h2>Select Menu current data: {selectMenu}</h2>
//       <h2>Checkbox current data: {checked}</h2>

//       <form onSubmit={handleSubmit}>
//         <label style={{ verticalAlign: 'top' }}>Comments:</label>
//         <textarea
//           value={textArea}
//           onChange={(e) => setTextArea(e.target.value)}
//           cols='30'
//           rows='5'
//         ></textarea>

//         <br />
//         <br />

//         <label htmlFor=''>Select Country:</label>
//         <select
//           value={selectMenu}
//           onChange={(e) => {
//             return setselectMenu(e.target.value);
//           }}
//         >
//           <option value='Nepal'>Nepal</option>
//           <option value='USA'>USA</option>
//           <option value='Australia'>Australia</option>
//           <option value='Norway'>Norway</option>
//         </select>

//         <br />
//         <br />

//         <label htmlFor=''>Yes A agree the terms &nbsp; </label>
//         <input
//           type='checkbox'
//           checked={checked}
//           onChange={(e) => {
//             return setChecked(e.target.checked);
//           }}
//         />

//         <br />
//         <br />

//         <input type='submit' value='Submit' />
//       </form>
//     </>
//   );
// }

// export default OtherInputs;

import React, { useState } from 'react';

function OtherInputs() {
  const [textarea, setTextarea] = useState('');
  const [selectMenu, setSelectMenu] = useState('USA');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].checked);
  };

  return (
    <>
      <p>Current data of textarea: {textarea}</p>
      <p>Current data of Select Menu: {selectMenu}</p>
      <p></p>
      <form onSubmit={handleSubmit}>
        <textarea
          cols='30'
          rows='5'
          onChange={(e) => {
            return setTextarea(e.target.value);
          }}
        ></textarea>
        <br /> <br />
        <select
          value={selectMenu}
          onChange={(e) => {
            return setSelectMenu(e.target.value);
          }}
        >
          <option value='USA'>USA</option>
          <option value='Australia'>Australia</option>
          <option value='Nepal'>Nepal</option>
          <option value='Britain'>Britain</option>
        </select>
        <br /> <br />
        <input
          type='checkbox'
          checked={checked}
          onChange={(e) => {
            return setChecked(e.target.checked);
          }}
        />
        <br /> <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

export default OtherInputs;
