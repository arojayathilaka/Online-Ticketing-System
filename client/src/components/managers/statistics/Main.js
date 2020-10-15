import React, {Component} from 'react';
import ManagersNavBar from "../ManagersNavBar";

class Main extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        console.log('hi')
    }

    render() {
        return (
            <div>
                <ManagersNavBar/>
                <button onClick={()=> window.location = "/managers/passengers"}>Passengers</button>
                <button onClick={()=> window.location = "/managers/fares"}>Fares</button>
            </div>
        );
    }
}

export default Main;
