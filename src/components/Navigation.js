import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './Signout';
import * as ROUTES from './routes';
import Login from './Login';
import Signup from './Signup';
const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
      <SignOutButton />
);
const NavigationNonAuth = () => (
    <div>
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
      </div>
    </div>
  </div>
  </div>
);
export default Navigation;