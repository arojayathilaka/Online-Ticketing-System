import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component  {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path="/" component={Login} exact/>
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
