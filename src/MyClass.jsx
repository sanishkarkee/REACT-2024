import React, { Component } from 'react';

export class MyClass extends Component {
  render() {
    // this.props.name = 'Sanish';   //props bata aako data read only hunxa so change garna mildaina

    return (
      <>
        <h1>My name is: {this.props.name}</h1>
        <h1>My age is: {this.props.age}</h1>

        {/* Accessing children props */}
        {this.props.children}
        <MyClass2 />
      </>
    );
  }
}

//----- Passing props from one component to another component

export class MyClass2 extends Component {
  render() {
    return (
      <>
        <h1>Learning never ends</h1>
      </>
    );
  }
}
