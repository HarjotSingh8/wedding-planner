import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from './routes';

const Savebtn = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);
const NavigationAuth = () => (
      <button className="btn btn-secondary">save</button>
);
const NavigationNonAuth = () => (
    <div></div>
);
export default Savebtn;