import React, {Component} from 'react';
import axios from 'axios'
import swal from "sweetalert";

class JourneyDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acNo: '',
            tokenID: '',
            startPoint: '',
            desPoint: '',
            appFare: '',
            distance: 0,
            jDate: '',
            jTime: '',
            fare: 0,
            journeyDetails: [],
        }

    }

    componentDidMount() {
        axios.get('http://localhost:5000/journeyDetails/')
            .then(res => {

                this.setState({journeyDetails: res.data})

                console.log(res.data);

            })
            .catch(error => {

                console.log(error);
            })




    }

    render() {
        return (
            <div className="container">
                <h3 style={{color: "#4A235A"}}>Journey Details</h3>
                <table className="table table-dark table-hover" >
                    <thead >
                    <tr>
                        <th scope="col">Account No</th>
                        <th scope="col">Start Location</th>
                        <th scope="col">End Location</th>
                        <th scope="col">Distance</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Fare Type</th>
                        <th scope="col">Fare</th>
                    </tr>
                    </thead>
                    <tbody style={{backgroundColor:"#A09D9C"}}>


                    {this.state.journeyDetails.map(journey => (
                        <tr key={journey._id}>
                            <td>{journey.acNo}</td>
                            <td>{journey.startPoint}</td>
                            <td>{journey.desPoint}</td>
                            <td>{journey.distance}</td>
                            <td>{journey.jDate}</td>
                            <td>{journey.jTime}</td>
                            <td>{journey.appFare}</td>
                            <td>{journey.fare}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>

        );

    }

}

export default JourneyDetails