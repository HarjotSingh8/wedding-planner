import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectBanquetCity from './SelectBanquetCity'
class Home extends Component{
    render() {
        return (
            <div className="col" style={{width:'100%'}}>
                <div class="jumbotron row justify-content-center" style={{backgroundImage:"url('https://media.weddingz.in/images/66e4ddd34b6cbfd42e60fbae48e85248/shweta-and-arjun-lakshmi-niwas-palace-bikaner-wedding.jpg')", backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat' }}>
                <div class="display-2 flex-shrink-1 d-flex text-light justify-content-center">WEDDING</div><div class="display-2 ml-2 flex-shrink-1 d-flex text-light justify-content-center">PLANNER</div>
                </div>
                <div class="display-3 d-flex justify-content-center">CITIES</div>
                <SelectBanquetCity />
            </div>
        );
    }

}

export default Home;