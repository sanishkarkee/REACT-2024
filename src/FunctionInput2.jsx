// import React, { useState } from 'react';

// function FunctionInput2() {
//   const [details, setDetails] = useState({
//     name: '',
//     email: '',
//     password: '',
//     address: '',
//   });

//   const handleChange = (e) => {
//     // console.log(e.target); //harek input field ko html tag dinxa

//     // const name = e.target.name;
//     // const value = e.target.value;

//     // OR

//     const { name, value } = e.target;

//     // console.log(name, value);

//     // settings these name,value in state variable
//     setDetails((prev) => {
//       // console.log(prev); // saba previous state ko value return garxa
//       return { ...prev, [name]: value };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(details);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <h3>Name: </h3>{' '}
//         <input type='text' name='name' onChange={handleChange} />
//         {/* box ko name ko
//         filed ko data lai state ma define bhayeko name ma store garna lai yo
//         name attribute diyeko ho */}
//         <h3>Email: </h3>{' '}
//         <input type='email' name='email' onChange={handleChange} />
//         <h3>Password: </h3>{' '}
//         <input type='password' name='password' onChange={handleChange} />
//         <h3>Address: </h3>{' '}
//         <textarea name='address' onChange={handleChange}></textarea>
//         <button type='submit'>Submit Form</button>
//       </form>
//     </>
//   );
// }

// export default FunctionInput2;

// -----------------------------PRATICE--------------------------------------
import React, { useState } from 'react';

function FunctionInput2() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const handleChange = (e) => {
    console.log(e.target); // type gareko input field ko tag dinxa, EG:<input type="text" name="name"/>
    const name = e.target.name;
    const value = e.target.value;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Name:</label>
        <input type='text' name='name' onChange={handleChange} />

        <label htmlFor=''>Email:</label>
        <input type='text' name='email' onChange={handleChange} />

        <label htmlFor=''>Password:</label>
        <input type='text' name='password' onChange={handleChange} />

        <textarea name='address' onChange={handleChange}></textarea>

        <button type='submit'> click to submit</button>
      </form>
    </>
  );
}

export default FunctionInput2;
