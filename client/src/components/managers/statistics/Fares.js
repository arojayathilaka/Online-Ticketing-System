import React, {Component} from 'react';
import ManagersNavBar from "../ManagersNavBar";
import axios from 'axios';
import './Fares.css';

class Fares extends Component {
    constructor() {
        super();
        this.state = {
            journeys: [],
            expressJourneys: []
        }
    }

    componentDidMount() {
        this.loadJourneys();
        this.loadExpressJourneys();
    }

    loadJourneys(){
        axios.get('http://localhost:5000/journey')
            .then(res => this.setState({ journeys: res.data }))
            .catch(err => console.log(err))
        console.log(this.state.journeys);
    }

    loadExpressJourneys(){
        axios.get('http://localhost:5000/express')
            .then(res => this.setState({ expressJourneys: res.data }))
            .catch(err => console.log(err))
        console.log(this.state.expressJourneys);
    }

    render() {
        return (
            <div>
                <ManagersNavBar/>
                <div className="passenger-header">
                    <h4 className="mt-1 mb-5">Fare Statistics</h4>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col">
                                    <label>Search By Date</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-3">
                            <div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Normal Journeys</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Expressway Journeys</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
                <br/>
                <h3 className="mt-1 mb-5" align="center">Fare Statistics Table</h3>
                <div className="container">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Account Number</th>
                            <th scope="col">Token ID</th>
                            <th scope="col">Journey Date</th>
                            <th scope="col">Fare</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor:"#A09D9C"}}>
                    {this.state.journeys.map(journey => (
                        <tr key={journey._id}>
                            <td>{journey.accNo}</td>
                            <td>{journey.tokenID}</td>
                            <td>{journey.jDate}</td>
                            <td>{journey.fare}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default Fares;
