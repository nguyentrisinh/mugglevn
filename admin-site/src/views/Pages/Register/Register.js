/**
 * Created by Asus on 5/6/2017.
 */
import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            repeat_password: "",
        }

        this.onCreateAccountClick = this.onCreateAccountClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onLoginPageClick = this.onLoginPageClick.bind(this);
    }

    onTextChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onCreateAccountClick(){
        if(this.state.email.indexOf("@") === -1){
            alert("Please type your email");
            return
        }


        if (this.state.password !== this.state.repeat_password ){
            alert("Your password isn't correct");
            this.setState({
                username: "",
                email: "",
                password: "",
                repeat_password: "",
            });
            return
        }
    }

    onLoginPageClick(){
        window.location.replace("/#/pages/login");
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mx-4">
                            <div className="card-block p-4">
                                <h1>Register</h1>
                                <p className="text-muted">Create your account</p>
                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i className="icon-user"></i></span>
                                    <input value={this.state.username} name="username" type="text" className="form-control" placeholder="Username" onChange={this.onTextChange}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-addon">@</span>
                                    <input value={this.state.email} name="email" type="text" className="form-control" placeholder="Email" onChange={this.onTextChange}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                                    <input value={this.state.password} name="password" type="password" className="form-control" placeholder="Password" onChange={this.onTextChange}/>
                                </div>

                                <div className="input-group mb-4">
                                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                                    <input value={this.state.repeat_password} name="repeat_password" type="password" className="form-control" placeholder="Repeat password" onChange={this.onTextChange}/>
                                </div>

                                <button type="button" className="btn btn-block btn-success" onClick={this.onCreateAccountClick}>Create Account</button>
                            </div>
                            <div className="card-footer p-4">
                                <div className="row">
                                    <div className="col-12">
                                        <button type="button" className="btn btn-block btn-primary" onClick={this.onLoginPageClick}>Login Page</button>
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

export default Register;
