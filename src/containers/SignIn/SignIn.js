import React, { Component } from 'react';
import './sign-in.css';

export class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: null
    }
  }

  render() {

    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password.length < 6 ||
      email === '';

    return (
      <form
        onSubmit={this.onSubmit}
      >
      <input
          value={email}
          onChange={this.handleChange}
          type="text"
          name='email'
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={this.handleChange}
          type="password"
          name='password'
          placeholder="Password"
        />
        <button
          type='submit'
          disabled={isInvalid}
        >
          Sign In
        </button>
        { error && <p>{error.message}</p> }
      </form>
    );
  }
}