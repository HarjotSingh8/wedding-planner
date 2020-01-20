import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { withFirebase } from './Firebase';
import { withAuthentication } from './Session';

import Navbar from './Navbar.js'
import All from './all.js'
import City from './city.js';
import Navigation from './Navigation'
import Banquets from'./Banquets'
import BanquetCitySelector from './banquetcityselector'


const App =() => (
<Router basname='/'>
      <div>
      <Navbar/>
      <Switch>
        <Route path='/banquets/' component={Banquets} />
        <Route path="/about"><About /></Route>
        <Route exactpath="/"><Home /></Route>
      </Switch>
      </div>
    </Router>)

class App1 extends Component {
  state= {
    cities : [],
    authUser:null
  }
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(
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
  render() {
  return (
    <Router basname='/'>
      <div>
      <Navbar cities={this.state.cities}/>
      <Switch>
        {this.state.cities.map((item, index) => (
          <Route path={`/city/${item}`}><City city={item} pageno={1}/></Route>
        ))}
        <Route path='/banquets/' component={Banquets} />
        <Route path='/banques/:handle/:handle1' component={BanquetCitySelector} />
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

export default withAuthentication(App);