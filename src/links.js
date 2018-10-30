import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp/SignUp';

export const SignUpLink = () => {
  return (
      <p>
        Don't have an account?
        <Link to={SignUp}>
          Sign up
        </Link>
      </p>
  );
}