import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar.js'
import All from './all.js'
import City from './city.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigation from './Navigation'
import { withFirebase } from './Firebase';

class App extends Component {
  state= {
    cities : [],
    authUser:null
  }
  constructor(props) {
    super(props);
    this.setState({authUser:null})
    /*this.state = {
      authUser: null,
    }*/
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
    
    console.log("called ");
    fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
      .then(res => res.json())
      .then(res =>
	
{console.log(res)
	this.setState({cities:res})
        }
      );
  }
  componentWillUnmount() {
    this.listener();
  }
  render() {
  return (
    <Router>
      <div>
      <Navbar cities={this.state.cities}/>
      <Switch>
        {this.state.cities.map((item, index) => (
          <Route path={`/city/${item}`}><City city={item}/></Route>
        ))}
        <Route path="/all"><All banquets={this.state.cities}/></Route>
        <Route path="/about"><About /></Route>
        <Route exactpath="/"><Home /></Route>
      </Switch>
      </div>
    </Router>
  );}
}

function Home() {
  return <h2>Home</h2>;
}



function About() {
  return <h2>About</h2>;
}

export default withFirebase(App);