import React, {Component} from 'react';
import './LoginHome.css'

class LoginHome extends Component {

    onClickPassengerLogin = () => {
        window.location = '/passengerLogin'
    }

    onClickManagerLogin = () => {
        window.location = '/managerLogin'
    }

    render() {
        return (
                <div className="image-bg-home">
                    <div className="btn-bg">
                        <button
                            className="login-home-btn"
                            style={{ top: "40%" }}
                            onClick={this.onClickPassengerLogin}
                        >
                            Passenger Login
                        </button>
                        <button
                            className="login-home-btn"
                            style={{ top: "60%" }}
                            onClick={this.onClickManagerLogin}
                        >
                            Public Transport Manager Login
                        </button>
                    </div>
                </div>
        );
    }
}

export default LoginHome;
