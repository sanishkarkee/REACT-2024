import React from 'react';

// stdData lai {} ma rakheko because uta bata array of objects aako xa ,,single data matra bhako bhaye props use garda hunthyo
function StudentCompo({ stdData }) {
  return (
    <>
      <h1>
        I am {stdData.name} & I am {stdData.age} years old.
      </h1>
    </>
  );
}

export default StudentCompo;
