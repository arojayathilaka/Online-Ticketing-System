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
            time: Date.now(),
            filteredJourneys: undefined,
            isSearchedByLoc: false,
            isSearchedByDay: false,
            isSearchedByTime: false
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
        // if (this.state.searchBy === 'loc' && this.state.isSearchedByLoc){
        //     this.setState({ journeys:  })
        // }
        // const journeys = this.state.journeys;

        // if (!this.state.isSearchedByLoc && !this.state.isSearchedByDay && !this.state.isSearchedByTime){
        //     this.setState({
        //         filteredJourneys: this.state.journeys.filter(j => {
        //             if (this.state.searchBy === 'loc') {
        //                 this.state.isSearchedByLoc = true;
        //                 return j.startPoint.toLowerCase() === this.state.location.toLowerCase() || j.desPoint.toLowerCase() === this.state.location.toLowerCase()
        //             }
        //             else if (this.state.searchBy === 'day') {
        //                 this.state.isSearchedByDay = true;
        //                 return j.jDate.substring(0, 3) === this.state.day
        //             }
        //             else if (this.state.searchBy === 'time') {
        //                 this.state.isSearchedByTime = true;
        //                 return j.jTime.substring(16, 21) === this.state.time.toString().substring(16, 21)
        //             }
        //         })
        //     })
        // } else {
        //     this.setState({
        //         filteredJourneys: this.state.journeys.filter(j => {
        //             if (this.state.searchBy === 'loc' && this.state.isSearchedByLoc) {
        //                 return j.startPoint.toLowerCase() === this.state.location.toLowerCase() || j.desPoint.toLowerCase() === this.state.location.toLowerCase()
        //             }
        //             else if (this.state.searchBy === 'day' && this.state.isSearchedByDay) {
        //                 return j.jDate.substring(0, 3) === this.state.day
        //             }
        //             else if (this.state.searchBy === 'time' && this.state.isSearchedByTime) {
        //                 return j.jTime.substring(16, 21) === this.state.time.toString().substring(16, 21)
        //             }
        //         })
        //     })
        // }
        if (this.state.searchBy === 'loc') { //when user tries to search by location

            // if user has searched by location previously or if this is the 1st time searching is being done, filter all journeys
            if (this.state.isSearchedByLoc || (!this.state.isSearchedByLoc && !this.state.isSearchedByDay && !this.state.isSearchedByTime)){
                this.setState({
                    filteredJourneys: this.state.journeys.filter(j => {
                        return j.startPoint.toLowerCase() === this.state.location.toLowerCase() || j.desPoint.toLowerCase() === this.state.location.toLowerCase()
                    })
                })
            // if user haven't searched by location previously but have searched by day or time filter previously filtered journeys
            } else if (this.state.isSearchedByDay || this.state.isSearchedByTime) {
                this.setState({
                    filteredJourneys: this.state.filteredJourneys.filter(j => {
                        return j.startPoint.toLowerCase() === this.state.location.toLowerCase() || j.desPoint.toLowerCase() === this.state.location.toLowerCase()
                    })
                })
            }
            this.setState({ isSearchedByLoc: true })

        } else if (this.state.searchBy === 'day') { //when user tries to search by day

            // if user has searched by day previously or if this is the 1st time searching is being done, filter all journeys
            if (this.state.isSearchedByDay || (!this.state.isSearchedByLoc && !this.state.isSearchedByDay && !this.state.isSearchedByTime)){
                this.setState({
                    filteredJourneys: this.state.journeys.filter(j => {
                        return j.jDate.substring(0, 3) === this.state.day
                    })
                })
            // if user haven't searched by day previously but have searched by location or time filter previously filtered journeys
            } else if (this.state.isSearchedByLoc|| this.state.isSearchedByTime) {
                this.setState({
                    filteredJourneys: this.state.filteredJourneys.filter(j => {
                        return j.jDate.substring(0, 3) === this.state.day
                    })
                })
            }
            this.setState({ isSearchedByDay: true })

        } else if (this.state.searchBy === 'time'){ //when user tries to search by time

            // if user has searched by time previously or if this is the 1st time searching is being done, filter all journeys
            if (this.state.isSearchedByTime || (!this.state.isSearchedByLoc && !this.state.isSearchedByDay && !this.state.isSearchedByTime)){
                this.setState({
                    filteredJourneys: this.state.journeys.filter(j => {
                        return j.jTime.substring(16, 21) === this.state.time.toString().substring(16, 21)
                    })
                })
            // if user haven't searched by time previously but have searched by day or location filter previously filtered journeys
            } else if (this.state.isSearchedByLoc|| this.state.isSearchedByDay) {
                this.setState({
                    filteredJourneys: this.state.filteredJourneys.filter(j => {
                        return j.jTime.substring(16, 21) === this.state.time.toString().substring(16, 21)
                    })
                })
            }
            this.setState({ isSearchedByTime: true })

        }
    }

    Table = () => {
        if (this.state.filteredJourneys !== undefined){ // searching has been done before
            if (this.state.filteredJourneys.length !== 0){ // when there are 1 or more results
                return (
                    <div className="container">
                        <h2 className="mt-4">{ this.state.filteredJourneys.length } passengers</h2>
                        <table className="table table-bordered table-active mt-3">
                            <thead>
                            <tr>
                                <th>Token ID</th>
                                <th>Acc no</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.filteredJourneys.map(j => (
                                    <tr key={ j._id }>
                                        <td>{ j.tokenID }</td>
                                        <td>{ j.accNo }</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                )
            } else if (this.state.filteredJourneys.length === 0){ //when there are no results
                return (<h2 className="container mt-4">No passengers</h2>)
            }
        }
         else{ //when searching has not been done yet
            return (<h2 className="container mt-4">Search to see results</h2>)
        }
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
                <this.Table/>
            </div>
        );
    }
}

export default Passengers;
