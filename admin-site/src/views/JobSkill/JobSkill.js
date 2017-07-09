/**
 * Created by Asus on 5/10/2017.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import JobSkillFormAdd from './SmallComponents/JobSkillFormAdd'
import JobSkillTable from './SmallComponents/JobSkillTable'
import * as actions from '../../actions/jobskill-management'

class JobSkill extends Component{
    render(){
        return(
            <div>
                <JobSkillFormAdd
                    jobskill_data={this.props.jobskill_data}
                    all_job_data={this.props.all_job_data}
                    all_skill_data={this.props.all_skill_data}
                    actions={this.props.actions}
                    flag_add={true}
                />
                <hr/>
                <JobSkillTable
                    jobskill_data={this.props.jobskill_data}
                    all_job_data={this.props.all_job_data}
                    all_skill_data={this.props.all_skill_data}
                    actions={this.props.actions}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        all_job_data: state.all_job_data,
        all_skill_data: state.all_skill_data,
        jobskill_data: state.jobskill_data,
    }
}

function matchDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch),
    }}

export default connect(mapStateToProps,matchDispatchToProps)(JobSkill);
