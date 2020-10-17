import React, {Component} from 'react';
import './PassengerActivityType.css';



class PassengerActivityType extends Component{

    onClickLocalAddCredit = () => {
        window.location = '/localPassengerAddCredit'
    }

    onClickPassengerJourneyType = () => {
        window.location = '/passengerJourneyType'
    }

    render() {
        return(

            <div className="image-bg-home">
                <div className="btn-bg">
                    <button
                        className="login-home-btn"
                        style={{ top: "40%" }}
                        onClick={this.onClickLocalAddCredit}
                    >
                        Add Credits to your Account
                    </button>
                    <button
                        className="login-home-btn"
                        style={{ top: "60%" }}
                        onClick={this.onClickPassengerJourneyType}
                    >
                        Make a Journey
                    </button>
                </div>
            </div>

        );
    }

}

export default PassengerActivityType;