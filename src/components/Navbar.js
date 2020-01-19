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

export default class Navbar extends Component {
  render() {
  return (
      <div>
        <div className="d-flex flex-row bg-dark text-white">  {/*Navbar*/}
          <div className="p-2 bg-dark text-monospace">
            WEDDING PLANNER
          </div>
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
          
            <div className="btn-group">
              <button type="button" className="btn btn-dark" data-toggle="dropdown">LOGIN</button>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-item">
                  <Login/>
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
      </div>
  );
}
}
