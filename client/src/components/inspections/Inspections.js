import React, {Component} from 'react';
import axios from 'axios'
import swal from "sweetalert";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ManagersNavBar from "../managers/ManagersNavBar";
import InspectionsTable from "./InspectionsTable";
import ReactToPrint from "react-to-print";


class Inspections extends Component {

    constructor(props) {
        super(props);
        /*this.onChangeSelectedDate = this.onChangeSelectedDate.bind(this);*/
        this.state = {

            tokenID: '',
            status: '',
            inspectorId:'',
            date: '',
            inspections: [],
            filteredInspections: undefined,
            isSearchedByDate:false,
            //searchBy:'date',

            invalidTokenCount:undefined,
        }

    }
   /* onChangeDate = (date) => {
        this.setState({
            date: date
        })
    };*/

    componentDidMount() {
        axios.get('http://localhost:5000/inspections/')
            .then(res => {

                this.setState({inspections: res.data})
                console.log(res.data);


            })
            .catch(error => {

                console.log(error);
            })
    }
    onChangeDay = e => this.setState({ day: e.target.value })

    //onChangeSearchBy = e => this.setState({ searchBy: e.target.value })

    onClickSearch  = () =>
{

    this.setState({filteredInspections: this.state.inspections.filter(j => j.date.substring(0, 10) === this.state.day)})
    this.setState({isSearchedByDate: true})



}


    render() {
        return (
            <div>
            <ManagersNavBar/>

                <div className="passenger-header">
                <h3 style={{color: "#4A235A"}}>Inspections</h3>
                <br/>
                <div className="row">
                    <div className="col-3 ">
                    <label class="font-weight-bold">Pick Date:</label>
                </div>
                    <div className="col-3" style={{marginLeft: "-200px"}}>
                        {/*<DatePicker
                            selected={this.state.selectedDate}
                            onChange={this.onChangeSelectedDate}
                        />*/}

                        <input
                            type="date"
                            /*className={this.state.searchBy === 'date' ? "form-control show" : "hide"}*/
                        onChange={this.onChangeDay}
                            style={{marginLeft: "80px"}}/>



                </div>
                    <div className="col-3" style={{marginLeft: "200px"}}>
                        <button className="btn btn-primary" onClick={this.onClickSearch}>Search</button>
                    </div>
                  {/*  <div className="col-3" style={{marginLeft: "200px"}}>
                    <button className="btn btn-primary">Generate</button>
                </div>*/}
                </div>
                </div>
                <br/>
               {/* {this.state.filteredInspections !== undefined ? // check whether searching has not been done yet
                    this.state.filteredInspections.length !== 0 ? // check whether no results found
                        <div className="container">


                            <table className="table table-dark table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Token ID</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Inspector ID</th>
                                    <th scope="col">Date</th>
                                </tr>
                                </thead>
                                <tbody style={{backgroundColor: "#A09D9C"}}>

                                {this.state.inspections.map(inspection => (
                                    <tr key={inspection._id}>
                                        <td>{inspection.tokenId}</td>
                                        <td>{inspection.status}</td>
                                        <td>{inspection.inspectorId}</td>
                                        <td>{inspection.date.substring(0, 10)}</td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>

                        </div>
                        : <h2 className="container mt-4">No Inspections found</h2>
                    : <h2 className="container mt-4">Search to see results</h2>}*/}


                {this.state.filteredInspections !== undefined ? // check whether searching has not been done yet
                    this.state.filteredInspections.length !== 0 ? // check whether no results found
                        <div className="container">
                            <InspectionsTable  ref={el => this.componentRef = el} />
                            <ReactToPrint
                                trigger={() => {return <button className="btn btn-primary">Generate Report</button>}}
                                content={() => this.componentRef}
                                pageStyle
                            />
                        </div>
                        : <h2 className="container mt-4">No Inspections found</h2>
                    : <h2 className="container mt-4">Search to see results</h2>}

                </div>

        );

    }

}

export default Inspections