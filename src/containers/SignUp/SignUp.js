import React, { Component } from 'react';
import { auth, db } from '../../firebase';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const {
      first_name,
      last_name,
      passwordOne,
      email
    } = this.state;

    try {
      const authUser = await auth.doCreateUserWithEmailAndPassword(email, passwordOne);
      console.log(authUser.user.uid)
      db.ref().child(authUser.user.uid).set({
          first_name,
          last_name,
          email
        });
    }
    catch (err) {
      this.setState({ error: err })
    }

    this.resetState();
  }

  resetState = () => {
    this.setState({
        first_name: '',
        last_name: '',
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
      first_name,
      last_name,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne.length < 6 ||
      email === '' ||
      first_name === '' ||
      last_name === '';

    return (
      <form
        onSubmit={this.onSubmit}
      >
      <input
          value={first_name}
          onChange={this.handleChange}
          name='first_name'
          type="text"
          placeholder="First Name"
        />
        <input
          value={last_name}
          onChange={this.handleChange}
          name='last_name'
          type="text"
          placeholder="Last Name"
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
        <button 
          type="submit"
          disabled={isInvalid}
        >
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default SignUp;