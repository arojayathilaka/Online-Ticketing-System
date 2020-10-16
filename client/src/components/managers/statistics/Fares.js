import React, {Component} from 'react';
import ManagersNavBar from "../ManagersNavBar";
import axios from 'axios';
import './Fares.css';
/*import DatePicker from 'react-datepicker';*/
import "react-datepicker/dist/react-datepicker.css"
import './FaresTable'
import ReactToPrint from "react-to-print";
import FaresTable from "./FaresTable";

class Fares extends Component {
    constructor() {
        super();
        this.state = {
            journeys: [],
            expressJourneys: [],
            searchBy: '',
            filteredJourneys: undefined,
            isSearchedByDate: false,
            isSearchedByDay: false,
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

    onChangeSearchBy = e => {
        this.setState({ searchBy: e.target.value })
    }

    onChangeDate = e => {
        this.setState({ date: e.target.value })
    }

    onChangeDay = e => {
        this.setState({ day: e.target.value })
    }

    onClickSearch = () => {
        if (this.state.searchBy === 'date'){

            if (this.state.isSearchedByDate || (!this.state.isSearchedByDate && !this.state.isSearchedByDay)){
                this.setState({
                    filteredJourneys: this.state.journeys.filter(j => j.jDate.substring(0, 3) === this.state.date)
                })
            } else if (this.state.isSearchedByDay){
                this.setState({
                    filteredJourneys: this.state.filteredJourneys.filter(j => j.jDate.substring(0, 3) === this.state.date)
                })
            }
            this.setState({isSearchedByDate: true})
        } else if (this.state.searchBy === 'day'){

            if (this.state.isSearchedByDay || (!this.state.isSearchedByDay && !this.state.isSearchedByDate)){
                this.setState({
                    filteredJourneys: this.state.journeys.filter(j => j.jDate === this.state.day)
                })
            }else if (this.state.isSearchedByDate){
                this.setState({
                    filteredJourneys: this.state.filteredJourneys.filter(j => j.jDate === this.state.day)
                })
            }
            this.setState({ isSearchedByDay: true })
        }
    }

    render() {
        return (
            <div>
                <ManagersNavBar/>
                <div className="fare-header">
                    <h3 className="mt-1 mb-5">Fare Statistics</h3>
                    <div className="row">
                        <div className="col-3">
                            <div className="row">
                                <div className="col my-2">
                                    <label>Search By : </label>
                                </div>
                                <div className="col">
                                    <select className="form-control" onChange={this.onChangeSearchBy}>
                                        <option value="date">Date</option>
                                        <option value="day">Day</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <input
                                type="date"
                                className={this.state.searchBy === 'date' ? "form-control show" : "hide"}
                                onChange={this.onChangeDate}
                            />
                            <select
                                className={this.state.searchBy === 'day' ? "form-control show" : "hide"}
                                onChange={this.onChangeDay}>
                                <option selected>Choose...</option>
                                <option value="Mon">Monday</option>
                                <option value="Tue">Tuesday</option>
                                <option value="Wed">Wednesday</option>
                                <option value="Thu">Thursday</option>
                                <option value="Fri">Friday</option>
                                <option value="Sat">Saturday</option>
                                <option value="Sun">Sunday</option>
                            </select>
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
                            <button className="btn btn-primary mx-2" onClick={()=> window.location = "/allFares"}>View All Fares</button>
                        </div>
                    </div>
                </div>
                {this.state.filteredJourneys !== undefined ? // check whether searching has not been done yet
                    this.state.filteredJourneys.length !== 0 ? // check whether no results found
                        <div className="container">
                            <FaresTable journeys={this.state.filteredJourneys} ref={el => this.componentRef = el} />
                            <ReactToPrint
                                trigger={() => {return <button className="btn btn-primary">Generate Report</button>}}
                                content={() => this.componentRef}
                                pageStyle
                            />
                        </div>
                    : <h2 className="container mt-4">No Fare Records</h2>
                : <h2 className="container mt-4">Search to see results</h2>}
            </div>
        );
    }
}

export default Fares;
