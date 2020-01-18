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
        {this.state.cities.map((item, index) => (
          <Route path={`/city/${item}`}><City city={item}/></Route>
        ))}
        <Route path="/all"><All banquets={this.state.cities}/></Route>
        <Route path="/about"><About /></Route>
        <Route path="/home"><Home /></Route>
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
