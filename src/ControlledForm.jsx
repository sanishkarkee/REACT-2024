import React, { Component } from 'react';

export default class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Adil',
    };
  }

  handleForm = (e) => {
    // console.log(e.target);

    this.setState({
      data: e.target.value,
      //   data: e.target.value.toUpperCase(),
      //   data: e.target.value.substring(0, 5),
    });
  };

  handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(e.target[0].value.toUpperCase());
  };

  render() {
    return (
      <>
        {/*---- On Change ----*/}
        {/* <form>
          <h1>{this.state.data}</h1>

          <label htmlFor=''>Enter Name: </label>
          <input
            type='text'
            value={this.state.data}
            onChange={this.handleForm}
          />
          <br />
          <input type='submit' value='Submit' />
        </form> */}

        {/*---- On Submit ----*/}
        <form onSubmit={this.handleFormSubmission}>
          <h1>{this.state.data}</h1>

          <label htmlFor=''>Enter Name: </label>
          <input
            type='text'
            value={this.state.data}
            onChange={this.handleForm}
          />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </>
    );
  }
}
