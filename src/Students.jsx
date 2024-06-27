import React from 'react';
import StudentCompo from './StudentCompo';

function Students() {
  // const students = ['Adil', 'Kumar', 'Prem', 'Zain'];

  // let studentNames = students.map((std, index) => <li key={index}> {std} </li>);

  const students = [
    { id: 1, name: 'Ali', age: 23 },
    { id: 2, name: 'Kumar', age: 25 },
    { id: 3, name: 'Prem', age: 27 },
  ];

  return (
    <>
      {/* <ul>{studentNames}</ul> */}

      {students.map((std) => (
        <StudentCompo key={std.id} stdData={std} />
      ))}
    </>
  );
}

export default Students;
