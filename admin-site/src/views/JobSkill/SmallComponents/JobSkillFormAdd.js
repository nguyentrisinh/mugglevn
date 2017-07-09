/**
 * Created by Asus on 5/10/2017.
 */
import React, {Component} from 'react'
import Select from 'react-select'

class JobSkillFormAdd extends Component{
    constructor(props){
        super(props)

        this.state={
            id: "",
            job: "",
            skill: "",
            description: "",
            flag_add: true,
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onJobSelectChange = this.onJobSelectChange.bind(this);
        this.onSkillSelectChange = this.onSkillSelectChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

    }

    onChangeInput(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onJobSelectChange(val){
        this.setState({
            job:val.value,
        })
    }

    onSkillSelectChange(val){
        this.setState({
            skill:val.value,
        })
    }

    onClickSave(){

        if (this.state.job === ""){
            alert("Please choose Job");
            return;
        }

        if (this.state.skill === ""){
            alert("Please choose Skill");
            return;
        }

        if (this.state.flag_add === true){
            const id = (Math.max.apply(Math,this.props.jobskill_data.jobskill.map(function(o){return o.id;})) + 1);
            var newJobSkillInfo = {
                id: id,
                job: this.state.job,
                skill: this.state.skill,
                description: this.state.description,
            };

            this.props.actions.addJobSkill(newJobSkillInfo);
        }

    };


    render(){
        return(
            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">
                        <strong>Job-Skill Form</strong>
                        <label className="switch switch-text switch-primary switch-pill float-right">
                            <input checked={this.state.flag_add} type="checkbox" className="switch-input" disabled/>
                            <span className="switch-label" data-on="Add" data-off="Edit"></span>
                            <span className="switch-handle"></span>
                        </label>
                    </div>
                    <div className="card-block">
                        <form action="" method="post" encType="multipart/form-data" className="form-2orizontal ">
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Job</label>
                                        <Select
                                            name="job"
                                            value={this.state.job}
                                            options={this.props.all_job_data.job}
                                            onChange={this.onJobSelectChange}
                                        />
                                        {/*<input value={this.state.author} name="author" className="form-control" placeholder="Review's author" onChange={this.onChangeInput}/>*/}
                                    </div>
                                    <div className="col-md-6">
                                        <label>Skill</label>
                                        <Select
                                            name="company"
                                            value={this.state.skill}
                                            options={this.props.all_skill_data.skill}
                                            onChange={this.onSkillSelectChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea value={this.state.description} name="description" rows="4" className="form-control" placeholder="Description" onChange={this.onChangeInput}/>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-sm btn-primary float-right" onClick={this.onClickSave} ><i className="fa fa-dot-circle-o"></i> Submit</button>
                        <button type="reset" className="btn btn-sm btn-danger float-right" onClick={this.onClickReset}><i className="fa fa-ban"></i> Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobSkillFormAdd;