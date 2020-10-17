import React, {Component} from 'react';
import axios from 'axios'
import swal from "sweetalert";
import './PassengerJourneyType.css';


class PassengerJourneyType extends Component{

    onClickMakeJourney = () => {
        window.location = '/normalWay'
    }

    onClickMakeExpressJourney = () => {
        window.location = '/expressWay'
    }

    onClickPassengerActivity = () => {
        window.location = '/activityPassenger'
    }

    render() {
        return(

            <div className="image-bg-home">
                <div className="btn-bg">
                    <button
                        className="login-home-btn"
                        style={{ top: "30%" }}
                        onClick={this.onClickMakeJourney}
                    >
                        Normal Journeys
                    </button>
                    <button
                        className="login-home-btn"
                        style={{ top: "50%" }}
                        onClick={this.onClickMakeExpressJourney}
                    >
                        Express Way Journeys
                    </button>
                    <button
                        className="login-home-btn"
                        style={{ top: "70%" }}
                        onClick={this.onClickPassengerActivity}
                    >
                        Passenger Activities
                    </button>
                </div>
            </div>

        );
    }

}

export default PassengerJourneyType;