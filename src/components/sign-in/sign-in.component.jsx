import React from 'react';

import './sign-in.styles';

import React, { Component } from 'react';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState = {
      email: '',
      password: '',
    };
  };

  handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event;
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" value={this.state.email} required />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
          />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
