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
        //console.log("username="+this.props.firebase.user(this.state.authUserState.uid).get('username'))
        /*console.log("username="+this.props.firebase.ref('/users/' + this.state.authUserState.uid).once('value').then(function(snapshot) {
          var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';  
        }))*/
        
    });
    
    fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
      .then(res => res.json())
      .then(res => this.setState({cities:res}))
  }
  render() {
  return (
      <div>
        <div className="d-flex flex-row bg-dark text-white">  {/*Navbar*/}
          <Link className="p-2 btn btn-dark text-monospaced" to="/">
            WEDDING PLANNER
          </Link>
          <div className="btn-group mr-auto">
            <button type="button" className="btn btn-dark">Venues</button>
            <Link className="btn btn-dark" to='/vendors'>VENDORS</Link>
            <Link  className="btn btn-dark" to='/banquets'>BANQUETS</Link>
          </div>
            <div><Navigation authUser={this.state.authUserState} username={this.state.usern} /></div>
        </div>
      </div>
  );
}
}

export default withFirebase(Navbar);