import React, {Component} from 'react';

class InspectionsTable extends Component {
    render() {
        return (
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
        )
    }
}

export default InspectionsTable;
