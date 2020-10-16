import React, {Component} from 'react';
import './PassengerActivityType.css';



class PassengerActivityType extends Component{

    onClickLocalAddCredit = () => {
        window.location = '/localPassengerAddCredit'
    }

    onClickForeignAddCredit = () => {
        window.location = '/foreignPassengersAddCredit'
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
                        Normal Journeys
                    </button>
                    <button
                        className="login-home-btn"
                        style={{ top: "60%" }}
                        onClick={this.onClickForeignAddCredit}
                    >
                        Express Way Journeys
                    </button>
                </div>
            </div>

        );
    }

}

export default PassengerActivityType;