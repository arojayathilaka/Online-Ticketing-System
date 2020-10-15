import React, {Component} from 'react';
import ManagersNavBar from "../ManagersNavBar";
import axios from 'axios';
import './Passengers.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

class Passengers extends Component {
    constructor() {
        super();
        this.state = {
            journeys: [],
            expressJourneys: [],
            searchBy: 'loc',
            time: Date.now()
        }
    }

    componentDidMount() {
        this.loadJourneys();
        this.loadExpressJourneys();
    }

    loadJourneys = () => {
        axios.get('http://localhost:5000/journey')
            .then(res => {
                this.setState({ journeys: res.data })
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    loadExpressJourneys = () =>{
        axios.get('http://localhost:5000/express')
            .then(res => {
                this.setState({expressJourneys: res.data})
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    onChangeSearchBy = e => {
        this.setState({ searchBy: e.target.value })
    }

    onChangeTime = time => {
        console.log(time.toString().substring(16,21));
        this.setState({ time: time })
    }

    onChangeDay = e => {
        this.setState({ day: e.target.value })
    }

    onChangeLocation = e => {
        this.setState({ location: e.target.value })
    }

    onClickSearch = () => {
        this.setState({
            journeys: this.state.journeys.filter(j => {
                if (this.state.searchBy === 'loc')
                    return j.startPoint.toLowerCase() === this.state.location.toLowerCase() || j.desPoint.toLowerCase() === this.state.location.toLowerCase()
                else if (this.state.searchBy === 'day')
                    return j.jDate.substring(0, 3) === this.state.day
                else if (this.state.searchBy === 'time')
                    return j.jTime.substring(16, 21) === this.state.time.toString().substring(16, 21)
            })
        })
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
                                <div className="col my-2">
                                    <label>Search By:</label>
                                </div>
                                <div className="col">
                                    <select className="form-control" onChange={this.onChangeSearchBy}>
                                        <option value="loc">Location</option>
                                        <option value="time">Time</option>
                                        <option value="day">Day</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <input
                                type="text"
                                className={
                                    this.state.searchBy === 'loc' ? "form-control show" : "hide"
                                }
                                onChange={this.onChangeLocation}
                            />
                            <select
                                className={
                                    this.state.searchBy === 'day' ? "form-control show" : "hide"
                                }
                                onChange={this.onChangeDay}>
                                <option value="Mon">Monday</option>
                                <option value="Tue">Tuesday</option>
                                <option value="Wed">Wednesday</option>
                                <option value="Thu">Thursday</option>
                                <option value="Fri">Friday</option>
                                <option value="Sat">Saturday</option>
                                <option value="Sun">Sunday</option>
                            </select>
                            <DatePicker
                                className={
                                    this.state.searchBy === 'time' ? "form-control show" : "hide"
                                }
                                selected={this.state.time}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                onChange={this.onChangeTime}
                            />
                        </div>
                        <div className="col-3 my-2">
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
                            <button className="btn btn-primary" onClick={this.onClickSearch}>Search</button>
                        </div>
                    </div>
                </div>
                <table className="table table-bordered table-active container mt-5">
                    <thead>
                    <tr>
                        <th>Token ID</th>
                        <th>Acc no</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.journeys.map(j => (
                            <tr key={ j._id }>
                                <td>{ j.tokenID }</td>
                                <td>{ j.accNo }</td>
                                {/*<td>{ j.jTime.substring(17, 21) }</td>*/}
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Passengers;
