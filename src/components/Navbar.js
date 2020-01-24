import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Login';
import Signup from './Signup';
import SignOutButton from './Signout';
import logo from './logo.png'

import { withFirebase } from './Firebase';

import  { FirebaseContext } from './Firebase';
import Navigation from './Navigation';

class Navbar extends Component {
  state= {
    cities:{},
    authUserState:null,
    usern:null,
    messages:null
  }
  constructor(props) {
    super(props);
    this.setState({authUser:null})
    this.updateUsername=this.updateUsername.bind(this);
    this.checkUpdate=this.checkUpdate.bind(this)
  }
  updateUsername() {
    //this.setState({usern:username})
    let user=null
    if(this.state.authUserState!=null)
    this.props.firebase.db.ref("users/"+this.state.authUserState.uid).once('value').then(function(snapshot) {
      const user = (snapshot.val() && snapshot.val().username) || 'Anonymous';
      console.log("uname="+user)
      //this.setState({usern:user})
    })/*.then( () => 
      this.setState( obj =>{
        return {usern:user}
      } ))*/
  }
  checkUpdate() {
    console.log(this.state.usern)
  }
  componentDidUpdate() {
    console.log(this.state.messages)
    if(this.state.authUserState!=null)
    this.props.firebase.db.ref("users/"+this.state.authUserState.uid+'/username').on('value', snapshot => {
      const messageObject = snapshot.val();
      if (messageObject) {
        if(this.state.usern==null)
        this.setState({
          usern: messageObject
        });
      }
    });
    
    /*if(this.state.usern==null && user!=null)
      this.setState({usern:user})
    console.log(this.state.usern)*/
  }
  componentDidMount() {
    
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUserState:authUser })
        : this.setState({ authUserState: null });
        console.log("user="+this.state.authUserState.uid)
        console.log("user"+this.props.firebase.auth.currentUser.profile)
        this.updateUsername()
    });
    
    fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
      .then(res => res.json())
      .then(res => this.setState({cities:res}))
  }
  render() {
  return (
      <div >
        <div className="container-fluid bg-dark text-white" style={{width:'100%'}}>  {/*Navbar*/}
        <div className="row d-flex justify-content-between">
          <Link className="btn col-12 col-sm-12 col-md-4 btn-dark text-monospaced " to="/">
          <div className="text-sm-center text-md-left">
            <b>WEDDING PLANNER</b>
            </div>
          </Link>
          <div className="d-flex col-12 col-sm-4 col-md-4 justify-content-center" >
          <div className="btn-group">
            <Link className="btn btn-dark" to='/vendors'>VENDORS</Link>
            <Link className="btn btn-dark" to='/banquets'>BANQUETS</Link>
          </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4"><Navigation authUser={this.state.authUserState} username={this.state.usern} /></div>
        </div>
        </div>
      </div>
  );
}
}

export default withFirebase(Navbar);