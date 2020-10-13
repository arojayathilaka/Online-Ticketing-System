import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginHome from "./login/LoginHome";
import PassengerLogin from "../passengers/login/PassengerLogin";
import ManagerLogin from "../managers/login/ManagerLogin";
import Passengers from "../managers/statistics/Passengers";
import Fares from "../managers/statistics/Fares";
import PassengersNavBar from "../passengers/PassengersNavBar";
import ManagersNavBar from "../managers/ManagersNavBar";

class App extends Component  {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={LoginHome} exact/>
                        <Route path="/passengerLogin" component={PassengerLogin} exact/>
                        <Route path="/managerLogin" component={ManagerLogin} exact/>
                        <div>
                            <PassengersNavBar/>
                        </div>
                        <div>
                            <ManagersNavBar/>
                            <Route path="/passengers" component={Passengers} exact/>
                            <Route path="/fares" component={Fares} exact/>
                        </div>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
