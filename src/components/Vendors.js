import React from 'react';
import {useLocation, withRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { withFirebase } from './Firebase';

import SelectVendorCity from './SelectVendorCity'
import ShowVendors from './ShowVendors'

/*
function Banquets1() {
    let query = new URLSearchParams(useLocation().search);
    let city=query.get("city");
    let page=query.get("page");
    if(city!=null) {
        if(page==null) { page=1; }
        return(<ShowBanquets city={city} page={page} />)
    }
    else { return(<SelectBanquetCity />) }
}*/

class Banquets extends React.Component {
    state= {
        city:null,
        page:null
    }
    constructor() {
        super()
    }
    componentDidUpdate() {
        console.log("page="+this.props.match.params.p)
        if(this.state.page!=this.props.match.params.p)
        this.setState({page:this.props.match.params.p})
    }
    render() {
        if(this.props.match.params.c!=undefined)
        return (
            <ShowVendors city={this.props.match.params.c} page={this.props.match.params.p} key={this.props.key} authUser={this.props.authUser}/>
        );
        return (
            <SelectVendorCity />
        );
    }
}

export default withRouter( withFirebase(Banquets))