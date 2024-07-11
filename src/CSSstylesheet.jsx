import React, { Component } from 'react';
import './CSSstylesheet.css';

export default class CSSstylesheet extends Component {
  render() {
    let x = this.props.check ? 'myFont' : 'myFont2';
    return (
      <>
        {/* <h1 className='myFont myFont2'>My name is Mohammad Adil</h1> */}

        {/* Apply CSS on the basis of condition */}
        <h1 className={`${x} myFont3`}>My name is Mohammad Adil</h1>
      </>
    );
  }
}
