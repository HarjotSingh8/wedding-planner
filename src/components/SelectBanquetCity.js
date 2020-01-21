import React, {Component} from 'react'
import { withFirebase } from "./Firebase"
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
class SelectBanquetCity extends Component {
    state={
        cities:{}
    }
    componentDidMount() {
        fetch("https://wp-database-d7c6f.firebaseio.com/public/cities.json")
        .then(res => res.json())
        .then(res => this.setState({cities:res}))
    }
    render() {
        return (
                <div class="row d-flex justify-content-center" style={{marginTop:'2rem', marginLeft:'1rem', marginRight:'1rem'}}>
                    {Object.keys(this.state.cities).map((key) => {
                        return <div class="card text-center border-light shadow bg-white rounded" style={{width: '16rem', marginRight:'2rem', marginBottom:'2rem'}}>
                                <img class="card-img-top" src="..." alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{this.state.cities[key]}</h5>
                                    <Link to={"/banquets/"+this.state.cities[key]+"/1"} class="btn btn-primary" style={{marginRight:'1rem'}}>Banquets</Link>
                                    <Link to={"/banquets/"+this.state.cities[key]+"/1"} class="btn btn-primary" >More</Link>
                                </div>
                            </div>
                    })}
                </div>
            
        )
    }
}

export default withRouter( withFirebase(SelectBanquetCity))