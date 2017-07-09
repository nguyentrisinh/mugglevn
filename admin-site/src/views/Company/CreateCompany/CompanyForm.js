/**
 * Created by Asus on 4/19/2017.
 */
import React, { Component } from 'react'
import Select from 'react-select'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addCompany} from '../../../actions/company-management'

class CompanyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            slug: "",
            overview: "",
            logo: "",
            nation_icon: "img/flags/Viet Nam.png",
            bio: "",
            type: "",
            size:"",
            district: "",
            location:"", //this attribute show the Company's district in text
            rating: 35,
            address: "",
            google_map: "",
            website: "",
            email: "",
            post_count: "0",
            total_post: "30",
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onTypesChange = this.onTypesChange.bind(this);
        this.onDistrictChange = this.onDistrictChange.bind(this);

    }

    onClickSave = () => {
        const id = (Math.max.apply(Math,this.props.company_data.company.map(function(o){return o.id;})) + 1);

        const newCompanyInfo = {
            id: id,
            logo:"img/avatars/4.jpg",
            nation_icon: this.state.nation_icon,
            name: this.state.name,
            slug: this.state.slug,
            overview: this.state.overview,
            bio: this.state.bio,
            type: this.state.type,
            size: this.state.size,
            district: this.state.district,
            location: this.state.location,
            rating: this.state.rating,
            address: this.state.address,
            google_map: this.state.google_map,
            website: this.state.website,
            email: this.state.email,
            post_count: "0",
            total_post: "30",
            post_percentage: 0,

            jobs: [],
            evaluations: [],
        };

        //save data here
        this.props.addCompany(newCompanyInfo);

        this.setState ({
            name: "",
            slug: "",
            overview: "",
            logo: "",
            bio: "",
            type: "",
            size:"",
            district: "",
            rating: 35,
            address: "",
            google_map: "",
            website: "",
            email: "",
        });

    };

    onClickReset = function(e){

    };

    //onChange of input type
    onChangeInput(e){
        this.setState({[e.target.name]:e.target.value})
    }
    //onTypesChange
    onTypesChange(val){
        this.setState({
            type: val.value,
        })
    }
    //onDistrictChange
    onDistrictChange(val){
        this.setState({
            district: val.value,
            location: val.label,
        });
    }

    render(){
        return (
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        <strong>Company Form</strong>
                    </div>
                    <div className="card-block">
                        <form action="" method="post" encType="multipart/form-data" className="form-2orizontal ">
                            <div className="form-group">
                                <label>Company's Name</label>
                                <input
                                    value={this.state.name}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Company's name"
                                    onChange={this.onChangeInput}
                                />
                            </div>
                            <div className="form-group">
                                <label>Company's Slug</label>
                                <input value={this.state.slug} type="text" name="slug" className="form-control" placeholder="Company's slug" onChange={this.onChangeInput}/>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-3 form-control-label" htmlFor="file-input">Logo</label>
                                <div className="col-md-9">
                                    <input type="file" id="file-input" name="file-input"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Company's Bio</label>
                                <input value={this.state.bio} type="text" name="bio" className="form-control" placeholder="Company's bio" onChange={this.onChangeInput}/>
                            </div>
                            <div className="form-group">
                                <label>Company's Overview</label>
                                <textarea value={this.state.overview} name="overview" rows="9" className="form-control" placeholder="Company's overview" onChange={this.onChangeInput}/>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Company's Type</label>
                                        <Select
                                            name="author"
                                            value={this.state.type}
                                            options={this.props.constant_data.types}
                                            onChange={this.onTypesChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Company's District</label>
                                        <Select
                                            name="author"
                                            value={this.state.district}
                                            options={this.props.constant_data.district_in_hcm_choices}
                                            onChange={this.onDistrictChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Rating</label>
                                        <input max="50" min="0" type="number" value={this.state.rating} name="rating" className="form-control" placeholder="Rating" onChange={this.onChangeInput}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Company's Size</label>
                                        <input min="0" type="number" value={this.state.size} name="size" className="form-control" placeholder="Company's size" onChange={this.onChangeInput}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Company's Address</label>
                                <input value={this.state.address} type="text" name="address" className="form-control" placeholder="Company's address" onChange={this.onChangeInput}/>
                            </div>
                            <div className="form-group">
                                <label>Google Map</label>
                                <input value={this.state.google_map} type="text" name="google_map" className="form-control" placeholder="Company's google map link" onChange={this.onChangeInput}/>
                            </div>

                            <div className="form-group">
                                <label>Website</label>
                                <input value={this.state.website} type="text" name="website" className="form-control" placeholder="Company's website" onChange={this.onChangeInput}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input value={this.state.email} type="email" name="email" className="form-control" placeholder="Company's email" onChange={this.onChangeInput}/>
                            </div>
                        </form>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-sm btn-primary" onClick={this.onClickSave} ><i className="fa fa-dot-circle-o"></i> Submit</button>
                            <button type="reset" className="btn btn-sm btn-danger" onClick={this.onClickReset}><i className="fa fa-ban"></i> Reset</button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}


// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state){
    return{
        company_data: state.company_data,
        constant_data: state.constant_data,
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addCompany: addCompany}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps) (CompanyForm);