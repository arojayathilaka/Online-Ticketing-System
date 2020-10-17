import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginHome from "./login/LoginHome";
import PassengerLogin from "../passengers/login/PassengerLogin";
import ManagerLogin from "../managers/login/ManagerLogin";
import Passengers from "../managers/statistics/Passengers";
import Fares from "../managers/statistics/Fares";
import JourneyDetailsForVariableFare from "../journeyDetails/JourneyDetailsForVariableFare";
import JourneyDetailsForFixedFare from "../journeyDetails/JourneyDetailsForFixedFare";
import Inspections from "../inspections/Inspections";
import MakeExpressJourney from "../passengers/makeExpressJourney/MakeExpressJourney";
import MakeJourney from "../passengers/makeJourney/MakeJourney";
import LocalPassengersAddCredit from "../passengers/localPassengersAddCredit/LocalPassengersAddCredit";
import foreignPassengersAddCredit from "../passengers/foreignPassengers/foreignPassengersAddCredit";
import AllFares from "../managers/statistics/AllFares"
import AllInspections from "../inspections/AllInspections"
import PassengerJourneyType from "../passengers/passengerJourneyType/PassengerJourneyType";


class App extends Component  {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={LoginHome} exact/>
                        <Route path="/passengerLogin" component={PassengerLogin} exact/>
                        <Route path="/managerLogin" component={ManagerLogin} exact/>
                        <Route path="/journeyDetails/normalJourney" component={JourneyDetailsForVariableFare} exact/>
                        <Route path="/journeyDetails/expressJourney" component={JourneyDetailsForFixedFare} exact/>
                        <Route path="/inspectionReports" component={Inspections} exact/>
                        <Route path="/managers/passenger-stats" component={Passengers} exact/>
                        <Route path="/managers/fare-stats" component={Fares} exact/>
                        <Route path="/expressWay" component={MakeExpressJourney} exact/>
                        <Route path="/normalWay" component={MakeJourney} exact/>
                        <Route path="/localPassengerAddCredit" component={LocalPassengersAddCredit} exact/>
                        <Route path="/allFares" component={AllFares} exact/>
                        <Route path="/inspections/viewAll" component={AllInspections} exact/>
                        <Route path="/passengerJourneyType" component={PassengerJourneyType} exact/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
