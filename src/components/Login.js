import React, { Component } from 'react';

import { SignUpLink } from './Signup';
import { withFirebase } from './Firebase';
import * as ROUTES from './routes';
const Login = () => (
  <div class="row justify-content-center bg-white p-5">
    <p class="display-3">Sign In</p>
    <SignInForm />
    <SignUpLink />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <div class="row justify-content-center bg-white">
        <input
          name="email"
          class="col-12 my-2"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          class="col-12 my-2"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button  class="btn btn-primary col-12 my-2" disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
        </div>
      </form>
    );
  }
}
const SignInForm = withFirebase(SignInFormBase);

export default Login;
export { SignInForm };