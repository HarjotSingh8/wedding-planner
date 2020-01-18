import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './navbar.js'
import All from './all.js'
import City from './city.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default class App extends Component {
  state= {
    cities : []
  }
  componentDidMount() {
    console.log("called ");
    fetch("https://wp-database-d7c6f.firebaseio.com/cities.json")
      .then(res => res.json())
      .then(res =>
	
{console.log(res)
	this.setState({cities:res})
        }
      );
  }
  render() {
  return (
    <Router>
      <div>
      <Navbar cities={this.state.cities}/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/*<Switch>*/}
        {this.state.cities.map((index, value) => (
          <Route path={`/city/${value}`}>
            <City cities={this.state.cities} k={index} />
          </Route>
        ))}
        {/*<Route path="/chandigarh">
          <Chandigarh banquets={this.state.banquets}/>
        </Route>*/}
        <Route path="/all">
          <All banquets={this.state.cities}/>
        </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        {/*</Switch>*/}

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
