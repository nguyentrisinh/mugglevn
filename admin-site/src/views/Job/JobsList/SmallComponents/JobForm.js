/**
 * Created by Asus on 4/29/2017.
 */
import React, {Component} from 'react'
import Select from 'react-select'
class JobForm extends Component {
    constructor(props){
        super(props);

        var stringTag = "";
        var i = 0;
        for (; i < props.data.tags.length - 1; i++){
            stringTag = stringTag.concat(props.data.tags[i] + '\n');
        }
        stringTag = stringTag.concat(props.data.tags[i]);

        this.state = {
            id: this.props.data.id,
            name: this.props.data.name,
            description: this.props.data.description,
            tags: stringTag,
            created_by: this.props.data.created_by,
            benefit: this.props.data.benefit,
            is_fulltime: this.props.data.is_fulltime,
            // num_of_apply: this.props.data.num_of_apply,
            // num_required: this.props.data.num_required,
            company: this.props.data.company,
            company_name: this.props.data.company_name,
            company_avatar: this.props.data.company_avatar,
            company_address: this.props.data.company_address,
            company_type: this.props.data.company_type,
            company_size: this.props.data.company_size,
            company_website:this.props.data.company_website,
            district: this.props.data.district,
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSelectedChange = this.handleSelectedChange.bind(this);
        this.handleCheckboxOnChange = this.handleCheckboxOnChange.bind(this);
    }

    //onChange of input type
    onChangeInput(e){
        this.setState({[e.target.name]:e.target.value})
    }

    //onChange of select input
    handleSelectedChange(event) {
        var selectedCompany = this.props.company_data.company.find(company => company.name === event.target.value);
        this.setState({
            company: selectedCompany.id,
            company_name: event.target.value,
            // company_selected: event.target.company,
            company_address: selectedCompany.address,
            company_type: selectedCompany.type,
            company_size: selectedCompany.size,
            company_avatar: selectedCompany.logo,
            company_website: selectedCompany.website,
            district: selectedCompany.location,
        });
    };
    //onChange Checkbox input
    handleCheckboxOnChange(e){
        this.setState({is_fulltime: e.target.checked})
    }

    // onClickSave
    onClickSave = () => {

        var lines = this.state.tags.split('\n');
        var stringTagsJson = '[';
        var i = 0;
        for(;i < lines.length - 1;i++){
            stringTagsJson = stringTagsJson.concat('"' + lines[i] + '",');
        }
        stringTagsJson = stringTagsJson.concat('"' + lines[i] + '"');
        stringTagsJson = stringTagsJson.concat(']');




        var newJobInfo = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description,
            tags: JSON.parse(stringTagsJson),
            created_by: this.state.created_by,
            benefit: this.state.benefit,
            is_fulltime: this.state.is_fulltime,
            // num_of_apply: this.state.num_of_apply,
            // num_required: this.state.num_required,
            company: this.state.company,
            company_name: this.state.company_name,
            company_avatar: this.state.company_avatar,
            company_address: this.state.company_address,
            company_type: this.state.company_type,
            company_size: this.state.company_size,
            company_website:this.state.company_website,
            district: this.state.district,
        }

        this.props.updateJob(newJobInfo)


    }


    render(){

        var companyOptionRender = this.props.company_data.company.map((company) => {
            return (
                <option value={company.name} key={company.id}>{company.id} - {company.name}</option>
            )
        });

        return (
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <strong>Company Form</strong>
                    </div>
                    <div className="card-block">
                        <form action="" method="post" encType="multipart/form-data" className="form-2orizontal ">
                            <div className="form-group">
                                <label>Job's Name</label>
                                <input
                                    value={this.state.name}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Job's name"
                                    ref="tencty"
                                    onChange={this.onChangeInput}
                                />
                            </div>
                            <div className="form-group">
                                <label>Job's Description</label>
                                <textarea value={this.state.description} name="description" rows="9" className="form-control" placeholder="Job's description" onChange={this.onChangeInput}/>
                            </div>
                            <div className="form-group">
                                <label>Tags</label>
                                <textarea value={this.state.tags} name="tags" rows="9" className="form-control" placeholder="Job's description" onChange={this.onChangeInput}/>
                            </div>
                            <div className="form-group">
                                <label>Created By</label>
                                {/*<input value={this.state.created_by} name="created_by" className="form-control" placeholder="Created by" onChange={this.onChangeInput}/>*/}
                                <Select
                                    options={this.props.all_user_data.user}
                                    onChange={this.onAuthorChange}
                                    value={this.state.created_by}
                                />
                            </div>
                            <div className="form-group">
                                <label>Benefits</label>
                                <textarea value={this.state.benefit} name="benefit" rows="9" className="form-control" placeholder="Job's description" onChange={this.onChangeInput}/>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-1 form-control-label">Full Time</label>
                                <div className="col-md-11">
                                    <div className="checkbox">
                                        <label htmlFor="checkbox1">
                                            <input type="checkbox" ref="isFullTime" checked={this.state.is_fulltime} onChange={this.handleCheckboxOnChange}/> Full Time
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="form-group">*/}
                                {/*<div className="row">*/}
                                    {/*<div className="col-md-6">*/}
                                        {/*<label>Number of Apply</label>*/}
                                        {/*<input value={this.state.num_of_apply} name="num_of_apply" className="form-control" placeholder="Number of Apply" onChange={this.onChangeInput}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-md-6">*/}
                                        {/*<label>Number of Required</label>*/}
                                        {/*<input value={this.state.num_required} name="num_required" className="form-control" placeholder="Number of Required" onChange={this.onChangeInput}/>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<label>District</label>*/}
                                {/*<input value={this.state.district} name="district" className="form-control" placeholder="District location" onChange={this.onChangeInput}/>*/}
                            {/*</div>*/}
                            <hr/>
                            <div className="form-group col-md-4">
                                <label>Company Name</label>
                                <select value={this.state.company_name} className="form-control" name="company_name" onChange={this.handleSelectedChange}>
                                    <option value=""> </option>
                                    {companyOptionRender}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input value={this.state.company_address} name="address" className="form-control" placeholder="address" onChange={this.onChangeInput} disabled/>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Company Type</label>
                                        <Select
                                            value={this.state.company_type}
                                            options={this.props.constant_data.types}
                                            disabled
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Company's Size</label>
                                        <input value={this.state.company_size} name="company_size" className="form-control" placeholder="Company's size" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Company's Website</label>
                                        <input value={this.state.company_website} name="company_website" className="form-control" placeholder="Company's website" disabled/>
                                    </div>
                                    <div className="col-md-6">
                                        <label>Location</label>
                                        <input value={this.state.district} name="district" className="form-control" placeholder="Combany's location" disabled/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        )
    }
}

export default JobForm;