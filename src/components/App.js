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
import Vendors from './Vendors'

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
import UserData from './UserData'
import Footer from './Footer';

const App1 =() => (
<Router basename='/'>
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
    authUser:null
  }
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log("update app.js"+this.state.authUser)
  }
  componentDidMount() {
    this.props.firebase.storage.ref('/cities/agraCompressed.jpg')
    this.props.firebase.auth.onAuthStateChanged(
      authUser => {
      if(authUser!=null && authUser!=this.state.authUser)
        authUser
        ? this.setState({ authUser:authUser })
        : this.setState({ authUser: null });
    });
    console.log("userauth changed ");
    
  }
  render() {
  return (
    <Router basename='/'>
      <div>
      <Navbar cities={this.state.cities} authUser={this.state.authUser}/>
      <Switch>
        {/*this.state.cities.map((item, index) => (
          <Route path={`/city/${item}`}><City city={item} pageno={1}/></Route>
        ))*/}
        <Route path="/banquets/:c?/:p?" render={(props) => (
          <Banquets authUser={this.state.authUser} {...props} />)
        } />
        <Route path="/vendors/:c?/:p?" render={(props) => (
          <Vendors authUser={this.state.authUser} {...props} />)
        } />
        <Route path="/userData" render={(props) => (
          <UserData authUser={this.state.authUser} {...props} />)
        } />
        {/*<Route path='/userData'><UserData authUser={this.state.authUser}/></Route>*/}
        
        <Route path="/all"><All banquets={this.state.cities}/></Route>
        <Route path="/about"><About /></Route>
        <Route exactpath="/"><Home /></Route>
      </Switch>
      <Footer/>
      </div>
    </Router>
  );}
}


function About() {
  return <h2>About</h2>;
}

export default  withAuthentication(App);