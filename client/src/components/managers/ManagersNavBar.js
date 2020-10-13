import React, { Component } from 'react';

class ManagersNavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/home">Home</a>
                <button
                    className="navbar-toggler"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/bookings">Bookings</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default ManagersNavBar
