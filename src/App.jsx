import { Component } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Adil',
    };
  }
  render() {
    //------ TYPE 1 : IfElse ------
    // const name = 'Adil';
    // if (name == 'Adil') {
    //   return <Component1 />;
    // } else {
    //   return <Component2 />;
    // }
    // ----OR----
    //   const name = 'Adil';
    //   let data;
    //   if (name == 'Adil') {
    //     data = <Component1 />;
    //   } else {
    //     data = <Component2 />;
    //   }
    //   return <>{data}</>;
    //------ TYPE 2 : Logical && Operator ------
    // const name = 'Adil';
    // return <>{name == 'Adil' && <h1>Hello Adil</h1>}</>;
    //------ TYPE 3 : Ternary Operator ------
    const age = 12;
    // return <>{age >= 18 ? <h1>You can vote</h1> : <h1>You cannot vote</h1>}</>;
    // Also return components
    return <>{this.state.name == 'Adil' ? <Component1 /> : <Component2 />}</>;
  }
}

export default App;
