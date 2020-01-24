import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../Signout';
import * as ROUTES from '../routes';
import Login from '../Login';
import Signup from '../Signup';
import Firebase from '../Firebase'
import NavigationAuth from './NavigationAuth'
const Navigation = ({authUser, username}) => (
  <div style={{height:'42px'}}>{authUser ? <NavigationAuth authUser={authUser} username={username}/> : <NavigationNonAuth />}</div>
);

const NavigationNonAuth = () => (
    <div className="btn-group" style={{height:'42px', float:'right'}}>
    <div className="btn-group">
        <button type="button" className="btn btn-dark" data-toggle="dropdown">LOGIN</button>
            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-item">
                  <Login/>
                <div id="firebaseui-auth-container"></div>
            </div>
        </div>
    </div>
    <div className="btn-group">
    <button type="button" className="btn btn-dark" data-toggle="dropdown">SIGNUP</button>
    <div className="dropdown-menu dropdown-menu-right">
      <div className="dropdown-item">
        <Signup/>
        <button className="save">save</button>
      </div>
    </div>
  </div>
  </div>
);

export default Navigation;