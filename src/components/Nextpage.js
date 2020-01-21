import React, {Component} from 'react'
import { withFirebase } from "./Firebase"
import { withRouter } from 'react-router'
import Banquets from './Banquets'

class Nextpage extends Component {
    render() {
        return (
            <Banquets/>
        )
    }
}

export default withRouter( withFirebase(Nextpage))