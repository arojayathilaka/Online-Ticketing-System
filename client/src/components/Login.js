import React, {Component} from 'react';
import './components.css';
import axios from 'axios'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        this.loadAccounts();
    }

    loadAccounts = () => {
        axios.get('http://localhost:5000/accounts')
            .then(accounts => {
                this.setState({
                    accounts: accounts.data
                })
                console.log(this.state.accounts)
            })
            .catch(err =>
                console.log(err)
            )
    }

    onChangeAccountNo = e => {
        this.setState({
            accNo: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        if(this.state.accounts.find(e => e.accNo === this.state.accNo)){
            console.log('success')
        } else{
            console.log('failed')
        }
    }

    render() {
        return (
            <div>
                <h5 className="login-header">Login to System</h5>
                <div className="login">
                    <form onSubmit={this.onSubmit}>
                        <h5>Account no</h5>
                        <input type="text" onChange={this.onChangeAccountNo}/>
                        <div>
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
