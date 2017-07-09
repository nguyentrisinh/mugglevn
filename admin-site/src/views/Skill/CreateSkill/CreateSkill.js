/**
 * Created by Asus on 5/4/2017.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addSkill} from '../../../actions/skill-management'

class CreateSkill extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: "",
            name: "",
            description: "",
        }

        this.onChangeInput = this.onChangeInput.bind(this);
    }

    //onChange of input type
    onChangeInput(e){
        this.setState({[e.target.name]:e.target.value})
    }

    //onClickSave
    onClickSave = () => {

        if (this.state.name === "")
            return;

        const id = (Math.max.apply(Math,this.props.skill_data.skill.map(function(o){return o.id;})) + 1);

        var newSkillInfo = {
            id: id,
            name: this.state.name,
            description: this.state.description
        }

        this.props.addSkill(newSkillInfo);

        this.setState({
            id: "",
            name: "",
            description: "",
        })

    };

    onClickReset = () => {
        this.setState({
            id: "",
            name: "",
            description: "",
        })
    }

    render(){
        return(
            <div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <strong>Skill Form</strong>
                        </div>
                        <div className="card-block">
                            <form action="" method="post" encType="multipart/form-data" className="form-2orizontal ">
                                <div className="form-group">
                                    <label>Skill's Name</label>
                                    <input value={this.state.name} name="name" className="form-control" placeholder="Skill's name" onChange={this.onChangeInput}/>
                                </div>
                                <div className="form-group">
                                    <label>Skill's Default Description</label>
                                    <textarea value={this.state.description} name="description" rows="4" className="form-control" placeholder="Skill's default description" onChange={this.onChangeInput}/>
                                </div>
                            </form>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-sm btn-primary" onClick={this.onClickSave} ><i className="fa fa-dot-circle-o"></i> Submit</button>
                                <button type="reset" className="btn btn-sm btn-danger" onClick={this.onClickReset}><i className="fa fa-ban"></i> Reset</button>
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
        skill_data: state.skill_data,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addSkill: addSkill}, dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(CreateSkill);