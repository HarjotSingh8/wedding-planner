import React, {Component} from 'react';
import {
  BrowserRouter as Router,
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
    authUser:null
  }
  constructor(props) {
    super(props);
    this.setState({authUser:null})
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
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
            <div className="btn-group">
              <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                BANQUETS
              </button>
              <div id="location-dropdown" className="dropdown-menu">
                <Link className="dropdown-item" to="all" >All Locations</Link>
                {/*<Link className="dropdown-item" to="chandigarh">CHANDIGARH</Link>*/}
                {this.props.cities.map((item, key) => {
                  return <Link className="dropdown-item" to={`/city/${item}`}>{item}</Link>
                })}
              </div>
            </div>
          </div>
            <div><Navigation authUser={this.state.authUser} /></div>
        </div>
      </div>
  );
}
}

export default withFirebase(Navbar);