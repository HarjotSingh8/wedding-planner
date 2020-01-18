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
        <div class="d-flex flex-row bg-dark text-white">  {/*Navbar*/}
          <div class="p-2 bg-dark text-monospace">
            WEDDING PLANNER
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-dark">Venues</button>
            <button type="button" class="btn btn-dark">Vendors</button>
            <div class="btn-group">
              <button type="button" class="btn btn-dark dropdown-toggle" data-toggle="dropdown">
                LOCATION
              </button>
              <div id="location-dropdown" class="dropdown-menu">
                <Link class="dropdown-item" to="all" >All Locations</Link>
                {/*<Link class="dropdown-item" to="chandigarh">CHANDIGARH</Link>*/}
                {this.props.cities.map((key, index) => {
                  return <Link class="dropdown-item" to={`/city/${key}`}
onNavigate={(event, callback) => {
    fetch("https://wedding-planner-40fad.firebaseio.com/banquets/"+key+".json")
      .then(res => res.json())
      .then(res =>
	
{console.log(res)
	this.setState({banquets:res})
        })
  }}
>{key}</Link>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
}
