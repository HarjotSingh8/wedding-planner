import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Login';
import Signup from './Signup';
import SignOutButton from './Signout';

import { withFirebase } from './Firebase';

import  { FirebaseContext } from './Firebase';
import Navigation from './Navigation';

class Navbar extends Component {
  state= {
    cities:{},
    authUserState:null
  }
  constructor(props) {
    super(props);
    this.setState({authUser:null})
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUserState:authUser })
        : this.setState({ authUserState: null });
    });
    fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
      .then(res => res.json())
      .then(res => this.setState({cities:res}))
  }
  render() {
  return (
      <div>
        <div className="d-flex flex-row bg-dark text-white">  {/*Navbar*/}
          <Link className="p-2 btn btn-dark text-monospaced" to="/">
            WEDDING PLANNER
          </Link>
          <div className="btn-group mr-auto">
            <button type="button" className="btn btn-dark">Venues</button>
            <button type="button" className="btn btn-dark">Vendors</button>
            <Link  className="btn btn-dark" to='/banquets'>BANQUETS</Link>
          </div>
            <div><Navigation authUser={this.state.authUserState} /></div>
        </div>
      </div>
  );
}
}

export default withFirebase(Navbar);