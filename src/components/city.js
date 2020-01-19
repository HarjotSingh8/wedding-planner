import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './mastercss.css';


export default class City extends Component {
state= {
  banquets:{}
  }

  componentDidMount() {
    console.log("didmount called");
    fetch("https://wp-database-d7c6f.firebaseio.com/banquets/"+this.props.city+".json")
      .then(res => res.json())
      .then(res =>
	
{console.log(res)
	this.setState({banquets:res})
        }
      );
  }
  render() {
  return (
    <div>
      <div>
        <div className="d-flex flex-row bg-secondary text-white">
          <div className="p-1 bg-secondary text-monospace">
            Location
          </div>
          <div class="searchdiv">
            <input id="searchlocation" type="text" class="searchbar"/>
          </div>
          <div class="searchspacer"></div>
          <div className="p-1 bg-secondary text-monospace">
            Name
          </div>
          <div class="searchdiv">
            <input id="searchname" type="text" class="searchbar"/>
          </div>
          <div class="searchspacer"></div>
        </div>
      </div>
      <div>
        <div id="banq">
        {Object.keys(this.state.banquets).map((key) => {
          return <div>
            <div class="card text-white bg-dark mt-3 ml-3 mr-3">
              <div class="row no-gutters">
                <div class="col-md-4 overflow-hidden">
                  <img src={this.state.banquets[key].image}></img>
                </div>
                <div class="col-md-8">
                  <div class="card-header">
                    <h4>{ this.state.banquets[key].name }</h4>

                  </div>
                  <div class="card-body">
                    <p class="card-text">{ this.state.banquets[key].desc }</p>
                    <p class="card-text">{ this.state.banquets[key].address }</p>
                    <p class="card-text">Price : { this.state.banquets[key].price } per plate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        })}
        </div>
      </div>
    </div>
  );
  
  }
}
