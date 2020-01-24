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
                <div className="row justify-content-center bg-light">
                    {Object.keys(this.state.cities).map((key) => {
                        return (
                            <div class="col-6 col-sm-4 col-md-3 mb-5"> 
                                <div class="card text-center border-light shadow-sm bg-white rounded" >
                                    <img class="card-img-top" src="..." alt="Card image cap" />
                                    <div class="card-body justify-content-center">
                                        <h5 class="card-title">{this.state.cities[key]}</h5>
                                        <Link to={"/banquets/"+this.state.cities[key]+"/1"} class="btn m-1 btn-primary">Banquets</Link>
                                        <Link to={"/banquets/"+this.state.cities[key]+"/1"} class="btn m-1 btn-primary">More</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            
        )
    }
}

export default withRouter( withFirebase(SelectBanquetCity))