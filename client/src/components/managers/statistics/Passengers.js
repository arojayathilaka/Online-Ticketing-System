import React, {Component} from 'react';
import ManagersNavBar from "../ManagersNavBar";
import axios from 'axios';
import './Passengers.css';

class Passengers extends Component {
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
                    <h5 className="mt-1 mb-5">Passenger Statistics</h5>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col">
                                    <label>Search By:</label>
                                </div>
                                <div className="col">
                                    <select className="form-control">
                                        <option value="loc">Location</option>
                                        <option value="time">Time</option>
                                        <option value="day">Day</option>
                                    </select>
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
                    {/*<form>*/}
                    {/*    <div className="form-row align-items-center">*/}
                    {/*        <div className="col-auto my-1">*/}
                    {/*            <label className="mr-sm-2 sr-only">Search By:</label>*/}
                    {/*            <select className="custom-select mr-sm-2">*/}
                    {/*                <option value="loc">Location</option>*/}
                    {/*                <option value="time">Time</option>*/}
                    {/*                <option value="day">Day</option>*/}
                    {/*            </select>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-auto my-1">*/}
                    {/*            <input type="text" className="form-control"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-auto my-1">*/}
                    {/*                <div className="custom-control custom-control-inline custom-radio mr-sm-2">*/}
                    {/*                    <input className="custom-control-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />*/}
                    {/*                    <label className="custom-control-label" htmlFor="inlineRadio1">Normal Journeys</label>*/}
                    {/*                </div>*/}
                    {/*                <div className="custom-control custom-control-inline custom-radio mr-sm-2">*/}
                    {/*                    <input className="custom-control-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />*/}
                    {/*                    <label className="custom-control-label" htmlFor="inlineRadio2">Expressway Journeys</label>*/}
                    {/*                </div>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-auto my-1">*/}
                    {/*            <button>Search</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
                {/*<div className="table-dark">*/}
                {/*    <tr>*/}
                {/*        <th></th>*/}
                {/*    </tr>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Passengers;
