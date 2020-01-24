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
import { withFirebase } from './Firebase';
import Savebtn from './Savebtn';

import  { FirebaseContext } from './Firebase';
function searchn(id) {

}

class BanquetCitySelector extends Component {
state= {
  banquets:{},
  arr:{},
  auth:null,
  city:null,
  pageno:null
  }
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { handle } = this.props.match.params
    const { handle1 } = this.props.match.params
    this.setState({city:handle})
    this.setState({pageno:handle1})
    console.log("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+handle+"/page1.json")
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser ? this.setState({ auth:authUser }) : this.setState({ auth: null });
      //authUser ? document.getElementsByClassName("save").style.visibility = "visible" : document.getElementsByClassName("save").style.visibility = "hidden";
    });
    const { handle } = this.props.match.params
    const { handle1 } = this.props.match.params
    this.setState({city:handle})
    this.setState({pageno:handle1})
    console.log("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+handle+"/page1.json")
    console.log("didmount called");
    fetch("https://wp-database-d7c6f.firebaseio.com/public/weddingz/banquets/"+handle+"/page1.json")
      .then(res => res.json())
      .then(res =>
        {console.log(res)
          this.setState({banquets:res})
        });
  }
  render() {
      if(this.state.handle1!=undefined)
  return (
    <div>
        city selector
      <div>
        <div style={{left:'0px', width:'100%', marginLeft:'0px'}}className="row bg-secondary text-white">
          {//<div class="col-xs-2 col-md-4 row" >
          }
          <div style={{float:'left', width:'400px', marginLeft:'0px'}} className="row">
            <div className="p-2 bg-secondary text-monospace">
              Location
            </div>
            <div class="searchdiv">
              <input id="searchlocation" type="text" class="searchbar" placeholder="search location"/>
            </div>
          </div>
          <div style={{float:'left', width:'400px', marginLeft:'0px'}} className="row">
          <div className="p-2 bg-secondary text-monospace">
            Name
          </div>
          <div class="searchdiv">
            <input id="searchname" type="text" class="searchbar" placeholder="search by name" onFocus={searchn("searchname")}/>
          </div>
          </div>
          <div style={{float:'left', width:'400px', marginLeft:'0px'}} className="row">
            <div className="p-2 bg-secondary text-monospace">Price:</div>
            <div className="btn-grp">
              <button className="btn btn-secondary">High to Low</button>
              <button className="btn btn-secondary">Low to High</button>
            </div>
          </div>
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
                    <Savebtn authUser={this.state.auth} id={key}/>
                    
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
  return(
      <div>no city selected</div>
  )
  }
}
export default withFirebase(BanquetCitySelector)