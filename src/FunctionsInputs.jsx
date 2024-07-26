import React, { useState } from 'react';

function FunctionsInputs() {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  //   e.target refers to the element that triggered the event (in this case, the input field).

  const handleChange = (e) => {
    //console.log(e.target.name); // kun input filed lai target gareko ho tyo dekhauxa,, name='nametextbox' or  name='emailTextbox'
    //console.log(e.target.value); //target gareko input filed ko value dekhauxa

    const name = e.target.name; //input field ko name
    const value = e.target.value; //input field ko value

    const new_value =
      name === 'email' ? value.toLowerCase().replace('#', '@') : value; //This line checks if the name of the input field is 'email'.
    console.log(name, value);

    setData((prev) => {
      return {
        ...prev,
        [name]: new_value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Enter Name: </label>
        <input
          type='text'
          value={data.name}
          name='name'
          onChange={handleChange}
          placeholder='Enter your name'
        />

        <br />
        <br />

        <label htmlFor=''>Enter Email: </label>
        <input
          type='email'
          value={data.email}
          name='email'
          onChange={handleChange}
          placeholder='Enter your email'
        />

        <br />
        <br />

        <input type='submit' value='Submit' />
      </form>
    </>
  );
}

export default FunctionsInputs;
