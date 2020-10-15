import React, {Component} from 'react';
import './ManagerLogin.css';
import axios from 'axios'
import swal from "sweetalert";

class ManagerLogin extends Component {

    constructor() {
        super();
        this.state = {
            managers: []
        }
    }

    componentDidMount() {
        this.loadAccounts();
    }

    loadAccounts = () => {
        axios.get('/managers')
            .then(managers => {
                this.setState({
                    managers: managers.data
                })

            })
            .catch(err =>
                console.log(err)
            )
    }

    onChangeManagerId = e => {
        this.setState({
            managerId: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.managers.find(e => e.managerId === this.state.managerId)){
            console.log('success')
            swal({
                title: "Login Successful!",
                text: "Welcome to Sri Lanka Public Transport!",
                icon: "success",
                button: {className: "swal-btn"}
            })
                .then(result => {
                    if (result)
                        window.location = '/managers/main'
                })
        } else{
            console.log('failed')
            swal({
                title: "Manager ID is Invalid!",
                text: "Enter a Valid Manager ID!",
                icon:"error",
                dangerMode: true
            });
        }
    }

    render() {
        return (
            <div className="image-bg-m">
                <h5 className="login-header">Public Transport Manager Login</h5>
                <div className="login">
                    <form onSubmit={this.onSubmit}>
                        <h5 style={{ color:"white" }}>Account No</h5>
                        <input style={{ width:"250px", height:"35px" }} type="text" onChange={this.onChangeManagerId}/>
                        <div>
                            <input type="submit" value="Manager Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ManagerLogin;
