/**
 * Created by Asus on 4/19/2017.
 */
import React, { Component } from 'react'
import Select from 'react-select'


class CompanyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            name: this.props.data.name,
            slug: this.props.data.slug,
            overview: this.props.data.overview,
            logo: this.props.data.logo,
            nation_icon: "img/flags/Viet Nam.png",
            bio: this.props.data.bio,
            type: this.props.data.type,
            size: this.props.data.size,
            district: this.props.data.district,
            location: this.props.data.location, //this attribute show the Company's district in text
            rating: this.props.data.rating,
            address: this.props.data.address,
            google_map: this.props.data.google_map,
            website: this.props.data.website,
            email: this.props.data.email,
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onTypesChange = this.onTypesChange.bind(this);
        this.onDistrictChange = this.onDistrictChange.bind(this);
    }

    onClickSave = () => {
        //save data here
        const newCompanyInfo = {
            id: this.state.id,
            name: this.state.name,
            slug: this.state.slug,
            overview: this.state.overview,
            logo: this.state.logo,
            nation_icon: this.state.nation_icon,
            bio: this.state.bio,
            type: this.state.type,
            size: this.state.size,
            district: this.state.district,
            location: this.state.location, //this attribute show the Company's district in text
            rating: this.state.rating,
            address: this.state.address,
            google_map: this.state.google_map,
            website: this.state.website,
            email: this.state.email,
        };
        this.props.updateCompany(newCompanyInfo);
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
                </div>

            </div>
        )
    }
}

export default CompanyForm;