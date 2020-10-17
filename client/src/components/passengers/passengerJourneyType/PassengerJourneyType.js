import React, {Component} from 'react';
import axios from 'axios'
import swal from "sweetalert";
import './PassengerJourneyType.css';
import PassengersNavBar from "../PassengersNavBar";


class PassengerJourneyType extends Component{

    onClickMakeJourney = () => {
        window.location = '/normalWay'
    }

    onClickMakeExpressJourney = () => {
        window.location = '/expressWay'
    }

    render() {
        return(

            <div className="image-bg-home">
                <PassengersNavBar/>
                <div className="btn-bg">
                    <button
                        className="login-home-btn"
                        style={{ top: "40%" }}
                        onClick={this.onClickMakeJourney}
                    >
                        Normal Journeys
                    </button>
                    <button
                        className="login-home-btn"
                        style={{ top: "60%" }}
                        onClick={this.onClickMakeExpressJourney}
                    >
                        Express Way Journeys
                    </button>
                </div>
            </div>

        );
    }

}

export default PassengerJourneyType;