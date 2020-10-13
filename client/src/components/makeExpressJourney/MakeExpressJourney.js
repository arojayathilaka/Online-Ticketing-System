import React, {Component} from 'react';
import axios from 'axios'
import swal from "sweetalert";

class MakeJourney extends Component{

    constructor(props) {
        super(props);

        this.onChangeUserAc = this.onChangeUserAc.bind(this);
        this.onChangeTokenId = this.onChangeTokenId.bind(this);
        this.onChangeStartPoint = this.onChangeStartPoint.bind(this);
        this.onChangeDesPoint = this.onChangeDesPoint.bind(this);
        this.onChangeAppFare = this.onChangeAppFare.bind(this);
        this.onChangeDistance = this.onChangeDistance.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);

        this.state = {
            acNo: '',
            tokenID: '',
            startPoint: '',
            desPoint: '',
            appFare: '',
            distance: 0,
            jDate: '',
            jTime: '',
            fare: 0
        }

    }

    onChangeUserAc(e){
        this.setState({
            acNo: e.target.value
        });
    }

    onChangeTokenId(e){
        this.setState({
            tokenID: e.target.value
        });
    }

    onChangeStartPoint(e){
        this.setState({
            startPoint: e.target.value
        });
    }

    onChangeDesPoint(e){
        this.setState({
            desPoint: e.target.value
        });
    }

    onChangeAppFare(e){
        this.setState({
            appFare: e.target.value
        });
    }

    onChangeDistance(e){
        this.setState({
            distance: e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            jDate: e.target.value
        });
    }

    onChangeTime(e){
        this.setState({
            jTime: e.target.value
        });
    }

    sweetalertfunction(){
        swal({
            title: "Journey details Added",
            text: "You are Successfully Added new Journey Detail.",
            icon: "success",
            button: true,
        }).then(()=>{
            this.setState({
                acNo: '',
                tokenID: '',
                startPoint: '',
                desPoint: '',
                appFare: '',
                distance: 0,
                jDate: '',
                jTime: '',
                fare: 0
            });
        });
    }


    calculateTotalBill(e){
        e.preventDefault();


        var tot = this.state.distance * 10;
        this.setState({
            fare: tot
        })




    }

    onSubmit(e){

        e.preventDefault();

        const journey = {
            acNo: this.state.acNo,
            tokenID: this.state.tokenID,
            startPoint: this.state.startPoint,
            desPoint: this.state.desPoint,
            appFare: this.state.appFare,
            distance: this.state.distance,
            jDate: this.state.jDate,
            jTime: this.state.jTime,
            fare: this.state.fare

        }

        axios.post('http://localhost:5000/journey/add', journey)
            .then(res => {
                    if (res.data.success === true) {
                        this.sweetalertfunction();
                    }
                    if (res.data.success === false) {
                        swal({
                            title: "Store Manager Not Added!",
                            text: res.data.message,
                            icon: "error",
                            button: true,
                            dangerMode: true,
                        });
                    }
                }

            );

    }

    render() {
        return(
            <div className="container">
                <h3 style={{color: "#4A235A"}}>Add Your Journey Details</h3>

                <form onSubmit={this.onSubmit} className="jumbotron" style={{backgroundColor:"#E8F8F5"}}>
                    <div className="form-group">
                        <label>Your Account Number: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.acNo}
                               onChange={this.onChangeUserAc}
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Token ID: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.tokenID}
                               onChange={this.onChangeTokenId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Start Location: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.startPoint}
                               onChange={this.onChangeStartPoint}
                        />
                    </div>
                    <div className="form-group">
                        <label>Destination: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.desPoint}
                               onChange={this.onChangeDesPoint}
                        />
                    </div>
                    <div className="form-group">
                        <label>Applied Fare: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.appFare}
                               onChange={this.onChangeAppFare}
                        />
                    </div>
                    <div className="form-group">
                        <label>Distance: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.distance}
                               onChange={this.onChangeDistance}
                        />
                    </div>
                    <div className="form-group">
                        <label>Journey Date: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.jDate}
                               onChange={this.onChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Journey Time: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.jTime}
                               onChange={this.onChangeTime}
                        />
                    </div>
                    <div className="form-group">
                        <label>Your Journey Fare: </label>
                        <input type="password"
                               className="form-control"
                               value={this.state.fare}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add StoreManagers" style={{ color:"#fff",backgroundColor:"#0097A7"}} className="btn"/>
                    </div>
                </form>
            </div>

        );
    }

}