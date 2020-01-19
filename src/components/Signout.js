import React from 'react';
import { withFirebase } from './Firebase';
const SignOutButton = ({ firebase }) => (
    <div className="btn-group">
        <button type="button" className="btn btn-dark" onClick={firebase.doSignOut}>SIGN OUT</button>
    </div>
);
export default withFirebase(SignOutButton);