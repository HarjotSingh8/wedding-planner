import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default class Navbar extends Component {
  render() {
  return (
      <div>
        <div className="d-flex flex-row bg-dark text-white">  {/*Navbar*/}
          <div className="p-2 bg-dark text-monospace">
            WEDDING PLANNER
          </div>
          <div className="btn-group">
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
          <div className="">
            <button type="button" className="btn btn-light btn-outline-primary">LOGIN</button>
            <button type="button" className="btn btn-light btn-outline-secondary">SIGNUP</button>
          </div>
        </div>
      </div>
  );
}
}
