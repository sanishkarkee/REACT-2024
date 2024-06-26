import React from 'react';
import StudentCompo from './StudentCompo';

function Students() {
  //   const students = ['Adil', 'Kumar', 'Prem', 'Zain'];

  //   const numbers = [2, 4, 6, 8];

  const students = [
    { name: 'Ali', age: 23 },
    { name: 'Kumar', age: 25 },
    { name: 'Prem', age: 27 },
  ];

  return (
    <>
      {/* {students.map((std) => (
        <h1>{std}</h1>
      ))} */}

      {/* {numbers.map((num) => (
        <h1>{(num = num * 2)}</h1>
      ))} */}

      {students.map((std) => (
        <StudentCompo stdData={std} />
      ))}
    </>
  );
}

export default Students;
