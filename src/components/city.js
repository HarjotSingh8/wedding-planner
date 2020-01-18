import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default class City extends Component {
state= {
    banquets : [{"a":"as","b": "bs"}]
  }
  
  render() {
  return (
      <div>
        <div id="banq">
	console.log(this.state.banquets)

	this.state.banquets[this.props.k].map((key) => {
	
          <div>
            <div class="card text-white bg-dark mt-3 ml-3 mr-3">
              <div class="row no-gutters">
                <div class="col-md-4 overflow-hidden">
                  <img src={key.image}></img>
                </div>
                <div class="col-md-8">
                  <div class="card-header">
                    <h4>{ key.name }</h4>

                  </div>
                  <div class="card-body">
                    <p class="card-text">{ key.desc }</p>
                    <p class="card-text">{ key.address }</p>
                    <p class="card-text">Price : { key.price } per plate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })

	
        {/*Object.keys(this.props.banquets).map((key) => {
          (key=="chandigarh")?return <div>
            <div class="card text-white bg-dark mt-3 ml-3 mr-3">
              <div class="row no-gutters">
                <div class="col-md-4 overflow-hidden">
                  <img src={key.image}></img>
                </div>
                <div class="col-md-8">
                  <div class="card-header">
                    <h4>{ key.name }</h4>

                  </div>
                  <div class="card-body">
                    <p class="card-text">{ key.desc }</p>
                    <p class="card-text">{ key.address }</p>
                    <p class="card-text">Price : { key.price } per plate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>:return null;
        })*/}
        </div>
      </div>
  );
  }
}
