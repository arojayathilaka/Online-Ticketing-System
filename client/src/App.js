import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginHome from "./components/login/LoginHome/LoginHome";
import PassengerLogin from "./components/login/PassengerLogin/PassengerLogin";
import ManagerLogin from "./components/login/ManagerLogin/ManagerLogin";

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
                            <NavBar/>
                        </div>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
