import React, {Component} from "react";

class FaresTable extends Component{
    render() {
        return(
            <div>
                <h2 className="mt-4">{ this.props.journeys.length } fares</h2>
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
                            <td>{j.jDate}</td>
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