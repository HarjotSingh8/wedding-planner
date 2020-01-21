import React, { Component } from "react";
import { Link } from "react-router-dom";
import SelectBanquetCity from './SelectBanquetCity'
class Home extends Component{
    render() {
        return (
            <div>
                <div class="jumbotron justify-content-center" style={{backgroundImage:"url('https://media.weddingz.in/images/66e4ddd34b6cbfd42e60fbae48e85248/shweta-and-arjun-lakshmi-niwas-palace-bikaner-wedding.jpg')", backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat' }}>
                <div class="display-1 d-flex text-light justify-content-center">WEDDING PLANNER</div>
                </div>
                <div class="display-1 d-flex justify-content-center" style={{width:'100%'}}>CITIES</div>
                <SelectBanquetCity />
            </div>
        );
    }

}

export default Home;