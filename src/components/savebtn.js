import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from './routes';

const Savebtn = ({ authUser, id }) => (
  <div>{authUser ? <NavigationAuth id={id} /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = ({id}) => (
  <div style={{position:'absolute', right:'0px', bottom:'0px'}}>
      <button value={id} className="btn btn-secondary" >Save</button>
      <button value={id} className="btn btn-secondary" >Remove</button>
  </div>
);
const NavigationNonAuth = () => (
    <button className="btn btn-secondary disabled" style={{position:'absolute', right:'0px', bottom:'0px'}}>Login to Save</button>
);
export default Savebtn;