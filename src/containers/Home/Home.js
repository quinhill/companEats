import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.css';
import SignOutButton from '../SignOut/SignOut';

export class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {

    const { user } = this.props;

    return (
      <div>
        <h1>Welcome, {user.first_name}!</h1>
        <SignOutButton />
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(Home);