import React, {Component} from "react";

class FaresTable extends Component{
    render() {
        return(
            <div>
                <h2 className="mt-4">Number Of Fares : { this.props.journeys.length }</h2>
                <h2 className="mt-4">Fare Total : </h2>
                <table className="table table-bordered table-active mt-3">
                    <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Token ID</th>
                        <th>Journey Date</th>
                        <th>Fare</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.journeys.map(j => (
                        <tr key={j._id}>
                            <td>{j.accNo}</td>
                            <td>{j.tokenID}</td>
                            <td>{j.jDate.substring(0, 10)}</td>
                            <td>{j.fare}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FaresTable;