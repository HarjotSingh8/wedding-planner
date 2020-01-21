import React, { Component } from 'react'
import Firebase from './Firebase'
import { withFirebase } from "./Firebase";
import SignOutButton from './Signout'
import {Link} from 'react-router-dom'

class NavigationAuth extends Component {
    componentDidMount() {
      //console.log("users"+this.props.firebase.db.path('/users'));
    }
    render() {
      return (
        <div>
            <Link className="btn btn-dark" to='/vendors'>{this.props.username}</Link>
            <SignOutButton />
        </div>
      );
    }
  }

  export default withFirebase(NavigationAuth)