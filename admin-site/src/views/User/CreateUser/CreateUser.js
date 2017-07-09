/**
 * Created by Asus on 5/2/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addUser} from '../../../actions/user-management'

//import for react-datepicker
import DatePicker from 'react-datepicker'
import moment from 'moment'

//import for react-select
import Select from 'react-select'

import 'react-datepicker/dist/react-datepicker.css';

class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: "",
            user: "",
            password: "",
            superuser_status: false,
            role: 2,
            bio: "",
            is_female: false,
            first_name: "",
            last_name: "",
            birth_date: moment(),
            email: "",
            university_name: "",
            major_name: "",
            faculty_name: "",
            address: "",
            startDate: moment()
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleCheckboxOnChange = this.handleCheckboxOnChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSuperuserOnChange = this.handleSuperuserOnChange.bind(this);
        this.onRoleChange = this.onRoleChange.bind(this);
    }

    //onChange of input type
    onChangeInput(e){
        this.setState({[e.target.name]:e.target.value})
    }

    //onChange Checkbox input
    handleCheckboxOnChange(e){
        this.setState({is_female: e.target.checked})
    }

    //datepicker handleChange
    handleChange(date){
        this.setState({birth_date: moment(date).format('YYYY-MM-DD HH:mm:ss')});
    }

    //superuser_status handleCheckboxOnChange
    handleSuperuserOnChange(e){
        this.setState({
            superuser_status: e.target.checked
        })
    }

    //onAuthorChange
    onRoleChange(val){
        this.setState({
            role: val.value,
        })
    }

    //onClickSave
    onClickSave = () => {
        const id = (Math.max.apply(Math,this.props.user_data.user.map(function(o){return o.id;})) + 1);

        var newUserInfo = {
            id: id,
            user: this.state.user,
            password: this.state.password,
            superuser_status: this.state.superuser_status,
            role: this.state.role,
            bio: this.state.bio,
            is_female: this.state.is_female,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            birth_date: this.state.birth_date,
            email: this.state.email,
            university_name: this.state.university_name,
            major_name: this.state.major_name,
            faculty_name: this.state.faculty_name,
            address: this.state.address,
        }

        this.props.addUser(newUserInfo);

        this.setState({
            id: "",
            user: "",
            password: "",
            superuser_status: false,
            role: 2,
            bio: "",
            is_female: false,
            first_name: "",
            last_name: "",
            birth_date: "",
            email: "",
            university_name: "",
            major_name: "",
            faculty_name: "",
            address: "",
        })

    };



    render(){

        var option = [{value: 1, label: "Admin"}, {value: 2, label: "Sinh viên"}];

        return(
            <div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <strong>User Form</strong>
                        </div>
                        <div className="card-block">
                            <form action="" method="post" encType="multipart/form-data" className="form-2orizontal ">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        value={this.state.user}
                                        name="user"
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        onChange={this.onChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input value={this.state.password} type="password" name="password" className="form-control" placeholder="Password" onChange={this.onChangeInput}/>
                                </div>

                                <div className="form-group">
                                    <div className="checkbox">
                                        <label htmlFor="checkbox1">
                                            <input type="checkbox" ref="superuser_status" checked={this.state.superuser_status} onChange={this.handleSuperuserOnChange}/> Superuser status
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Role</label>
                                    {/*<input value={this.state.created_by} name="created_by" className="form-control" placeholder="Created by" onChange={this.onChangeInput}/>*/}
                                    <Select
                                        className="col-md-4"
                                        options={option}
                                        onChange={this.onRoleChange}
                                        value={this.state.role}
                                    />
                                </div>

                                {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                <hr/>

                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>First Name</label>
                                            <input value={this.state.first_name} name="first_name" className="form-control" placeholder="First Name" onChange={this.onChangeInput}/>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Last Name</label>
                                            <input value={this.state.last_name} name="last_name" className="form-control" placeholder="First Name" onChange={this.onChangeInput}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>User's Bio</label>
                                    <textarea value={this.state.bio} name="bio" rows="9" className="form-control" placeholder="User's bio" onChange={this.onChangeInput}/>
                                </div>
                                <div className="form-group row">
                                    <label className="col-md-1 form-control-label">Female:</label>
                                    <div className="col-md-11">
                                        <div className="checkbox">
                                            <label htmlFor="checkbox1">
                                                <input type="checkbox" ref="isFullTime" checked={this.state.is_female} onChange={this.handleCheckboxOnChange}/>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/*<div className="form-group">*/}
                                    {/*<label>User's Birthday</label>*/}
                                    {/*<input value={this.state.birth_date} name="birth_date" className="form-control" placeholder="User's birthday" onChange={this.onChangeInput}/>*/}
                                {/*</div>*/}

                                <div className="form-group">
                                    <div className="row">
                                        <label className="col-md-2">Birthday</label>
                                        <DatePicker
                                            className="form-control"
                                            dateFormat="YYYY-MM-DD"
                                            selected={moment(this.state.birth_date)}
                                            onChange={this.handleChange}
                                            peekNextMonth
                                            showMonthDropdown
                                            showYearDropdown
                                            dropdownMode="select"
                                            placeholderText="Format: YYYY-MM-DD"
                                        />
                                    </div>
                                </div>




                                <div className="form-group">
                                    <label>Address</label>
                                    <input value={this.state.address} name="address" className="form-control" placeholder="address" onChange={this.onChangeInput}/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={this.state.email} name="email" className="form-control" placeholder="Email" onChange={this.onChangeInput}/>
                                </div>

                                <div className="form-group">
                                    <label>University</label>
                                    <input value={this.state.university_name} name="university_name" className="form-control" placeholder="University'd name" onChange={this.onChangeInput}/>
                                </div>

                                <div className="form-group">
                                    <label>Major Name</label>
                                    <input value={this.state.major_name} name="major_name" className="form-control" placeholder="Major's name" onChange={this.onChangeInput}/>
                                </div>
                                <div className="form-group">
                                    <label>Faculty's Name</label>
                                    <input value={this.state.faculty_name} name="faculty_name" className="form-control" placeholder="Faculty's name" onChange={this.onChangeInput}/>
                                </div>
                            </form>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-sm btn-primary" onClick={this.onClickSave} ><i className="fa fa-dot-circle-o"></i> Submit</button>
                                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user_data: state.user_data,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addUser: addUser}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CreateUser);
