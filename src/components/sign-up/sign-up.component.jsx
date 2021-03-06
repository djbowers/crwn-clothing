import React, { Component } from 'react';

import './sign-up.styles.scss';

import CustomButton from './../custom-button/custom-button.component';
import FormInput from './../form-input/form-input.component';

import {
  auth,
  createUserProfileDocument
} from './../../firebase/firebase.utils';

const INITIAL_STATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

class SignUp extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(userAuth, { displayName });
      this.setState(INITIAL_STATE);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            label="display name"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={confirmPassword}
            label="confirm password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
