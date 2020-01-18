import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default class all extends Component {
  render() {
  return (
      <div>
        <div id="banq">
        {Object.keys(this.props.banquets).map((key) => {
          return <div>
            <div class="card text-white bg-dark mt-3 ml-3 mr-3">
              <div class="row no-gutters">
                <div class="col-md-4 overflow-hidden">
                  <img src={this.props.banquets[key][0].image}></img>
                </div>
                <div class="col-md-8">
                  <div class="card-header">
                    <h4>{ this.props.banquets[key][0].name }</h4>

                  </div>
                  <div class="card-body">
                    <p class="card-text">{ this.props.banquets[key][0].desc }</p>
                    <p class="card-text">{ this.props.banquets[key][0].address }</p>
                    <p class="card-text">Price : { this.props.banquets[key][0].price } per plate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
        </div>
      </div>
  );
  }
}
