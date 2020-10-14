import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginHome from "./login/LoginHome";
import PassengerLogin from "../passengers/login/PassengerLogin";
import ManagerLogin from "../managers/login/ManagerLogin";
import Passengers from "../managers/statistics/Passengers";
import Fares from "../managers/statistics/Fares";
import Main from "../managers/statistics/Main";
import JourneyDetails from "../journeyDetails/JourneyDetails";
class App extends Component  {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={LoginHome} exact/>
                        <Route path="/passengerLogin" component={PassengerLogin} exact/>
                        <Route path="/managerLogin" component={ManagerLogin} exact/>
                        <Route path="/journeyDetails" component={JourneyDetails} exact/>
                        <Route path="/managers/main" component={Main} exact/>
                        <Route path="/managers/passengers" component={Passengers} exact/>
                        <Route path="/managers/fares" component={Fares} exact/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
