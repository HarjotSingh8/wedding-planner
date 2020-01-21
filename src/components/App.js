import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
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
import Nextpage from './Nextpage'
import Home from './Home'

const App1 =() => (
<Router basname='/'>
      <div>
      <Navbar/>
      <Switch>
        <Route path='/banquets' component={Banquets} />
        <Route path='/Nextpage' component={Nextpage} />
        <Route path="/about"><About /></Route>
        <Route exactpath="/"><Home /></Route>
      </Switch>
      </div>
    </Router>)

class App extends Component {
  state= {
    cities : [],
    authUser:null
  }
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {

  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(
      authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
    
    console.log("called ");
    
  }
  render() {
  return (
    <Router basename='/'>
      <div>
      <Navbar cities={this.state.cities}/>
      <Switch>
        {/*this.state.cities.map((item, index) => (
          <Route path={`/city/${item}`}><City city={item} pageno={1}/></Route>
        ))*/}
        <Route path="/banquets/:c?/:p?" render={(props) => (
          <Banquets key={props.match.params.city} {...props} />)
        } />
        <Route path='/banques/' component={Banquets} />
        <Route path="/all"><All banquets={this.state.cities}/></Route>
        <Route path="/about"><About /></Route>
        <Route exactpath="/"><Home /></Route>
      </Switch>
      </div>
    </Router>
  );}
}


function About() {
  return <h2>About</h2>;
}

export default  withAuthentication(App);