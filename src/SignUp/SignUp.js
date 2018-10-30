import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  resetState = () => {
    this.setState({
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null
    })
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    return (
      <form
        onSubmit={this.onSubmit}
      >
      <input
          value={username}
          onChange={this.handleChange}
          name='username'
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={this.handleChange}
          type="text"
          name='email'
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={this.handleChange}
          type="password"
          name='passwordOne'
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={this.handleChange}
          type="password"
          name='passwordTwo'
          placeholder="Confirm Password"
        />
        <button type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default SignUp;