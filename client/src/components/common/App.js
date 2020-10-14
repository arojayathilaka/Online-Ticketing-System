import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginHome from "./login/LoginHome";
import PassengerLogin from "../passengers/login/PassengerLogin";
import ManagerLogin from "../managers/login/ManagerLogin";
import Passengers from "../managers/statistics/Passengers";
import Fares from "../managers/statistics/Fares";
import Main from "../managers/statistics/Main";
import MakeExpressJourney from "./components/makeExpressJourney/MakeExpressJourney";
import MakeJourney from "./components/makeJourney/MakeJourney";

class App extends Component  {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={LoginHome} exact/>
                        <Route path="/passengerLogin" component={PassengerLogin} exact/>
                        <Route path="/managerLogin" component={ManagerLogin} exact/>
                        <Route path="/managers/main" component={Main} exact/>
                        <Route path="/managers/passengers" component={Passengers} exact/>
                        <Route path="/managers/fares" component={Fares} exact/>
                        <Route path="/expressWay" component={MakeExpressJourney} exact/>
                        <Route path="/normalWay" component={MakeJourney} exact/>
                        <div>
                            <NavBar/>
                        </div>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
