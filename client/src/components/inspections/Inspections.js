import React, {Component} from 'react';
import axios from 'axios'
import swal from "sweetalert";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Inspections extends Component {

    constructor(props) {
        super(props);
        this.onChangeSelectedDate = this.onChangeSelectedDate.bind(this);
        this.state = {

            tokenID: '',
            status: '',
            inspectorId:'',
            date: '',
            inspections: [],
            selectedDate: new Date()
        }

    }
    onChangeSelectedDate = (selectedDate) => {
        this.setState({
            selectedDate: selectedDate
        })
    };


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


    render() {
        return (
            <div className="container">
                <h3 style={{color: "#4A235A"}}>Generate Inspection Report</h3>
                <br/>
                <div className="row">
                    <div className="col-3 ">
                    <label class="font-weight-bold">Pick Date:</label>
                </div>
                    <div className="col-3" style={{marginLeft: "-200px"}}>
                        <DatePicker
                            selected={this.state.selectedDate}
                            onChange={this.onChangeSelectedDate}
                        />
                    </div>
                    <div className="col-3" style={{marginLeft: "200px"}}>
                    <button className="btn btn-primary">Generate</button>
                </div>
                </div>
                <br/>
                <table className="table table-dark table-hover" >
                    <thead >
                    <tr>
                        <th scope="col">Token</th>
                        <th scope="col">Status</th>
                        <th scope="col">Inspector ID</th>
                        <th scope="col">Date</th>
                    </tr>
                    </thead>
                    <tbody style={{backgroundColor:"#A09D9C"}}>

                    {this.state.inspections.map(inspection => (
                        <tr key={inspection._id}>
                            <td>{inspection.tokenId}</td>
                            <td>{inspection.status}</td>
                            <td>{inspection.inspectorId}</td>
                            <td>{inspection.date}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>

            </div>

        );

    }

}

export default Inspections