/**
 * Created by Asus on 5/5/2017.
 */
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "username",
            password: "",
        }

        this.onTextChange = this.onTextChange.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onRegisterClick = this.onRegisterClick.bind(this);

    }

    onTextChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onLoginClick(){
        if (this.state.password === "password1")
            window.location.replace("/#/home/dashboard");
        else
            alert("Wrong password")
    }

    onRegisterClick(){
        window.location.replace("/#/pages/register");
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group mb-0">
                            <div className="card p-4">
                                <div className="card-block">
                                    <h1>Login</h1>
                                    <p className="text-muted">Sign In to your account</p>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="icon-user"></i></span>
                                        <input value={this.state.username} type="text" name="username" className="form-control" placeholder="Username" onChange={this.onTextChange}/>
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="icon-lock"></i></span>
                                        <input value={this.state.password} type="password" name="password" className="form-control" placeholder='Example:"password1"'  onChange={this.onTextChange}/>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="btn btn-primary px-4" onClick={this.onLoginClick}>Login</button>
                                        </div>
                                        <div className="col-6 text-right">
                                            {/*<button type="button" className="btn btn-link px-0">Forgot password?</button>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                                <div className="card-block text-center">
                                    <div>
                                        <h2>Sign up</h2>
                                        <p>You don't have an account? Please create here.</p>
                                        <button type="button" className="btn btn-success px-4" onClick={this.onRegisterClick}>Register Now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
