import React, {Component} from 'react';
import ManagersNavBar from "../ManagersNavBar";
import axios from 'axios';
import './Fares.css';

/*const JourneyNormal = props => {
    <tr>
        <td>{props.journeynormal.acNo}</td>
        <td>{props.journeynormal.tokenID}</td>
        <td>{props.journeynormal.jDate.substring(0,10)}</td>
        <td>{props.journeynormal.fare}</td>
    </tr>
}*/

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

    /*fareList(){
        return this.state.journey.map(currentjourney => {
            return <JourneyNormal journeynormal={currentjourney} key={currentjourney._id}/>;
        })
    }*/

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
                <h3>Fare Statistics Table</h3>
                <table className="fare_table">
                    <thead className="table-light">
                        <tr>
                            <th>Account Number</th>
                            <th>Token ID</th>
                            <th>Journey Date</th>
                            <th>Fare</th>
                        </tr>
                    </thead>
                    {/*<tbody>
                        { this.fareList() }
                    </tbody>*/}
                </table>
            </div>

        );
    }
}

export default Fares;
