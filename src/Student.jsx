import React, { Component } from 'react';

export default class Student extends Component {
  constructor(props) {
    super(props); // child class (Student) ko constructor le  parent class(Component) ko constructor call garna lai use gareko ho
    console.log('Constructor from student');
  }
  render() {
    return (
      <>
        <h1>Hello World {this.props.name}</h1>
      </>
    );
  }
}

/*  NOTE:(Overall Points)
1.Component call garnu bhaneko Object create hunu ho. Eg : <App/>
2.Object create bhaye paxi chai constructor() automatically call hunxa
3.child construtor() le parent constructor() call garna lai "Super()" keyword call garnai parxa OR
  constructor() banaye paxi first line ma "Super()" lekhnai parxa
4."this.props" use garna lai constructor() & super() ma props pass garnai parxa
 */
