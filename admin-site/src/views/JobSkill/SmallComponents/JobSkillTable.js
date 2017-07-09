/**
 * Created by Asus on 5/10/2017.
 */
import React, {Component} from 'react'
import JobSkillRow from './JobSkillRow'

class JobSkillTable extends Component{
    render(){

        var JobSkillListRender = this.props.jobskill_data.jobskill.map((jobskill) => {
            return(
                <JobSkillRow
                    key={jobskill.id}
                    data={jobskill}
                    actions={this.props.actions}
                    all_job_data={this.props.all_job_data}
                    all_skill_data={this.props.all_skill_data}
                />
            )
        })

        return(
            <div>
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            Users List
                        </div>
                        <div className="card-block">
                            <table className="table table-hover table-outline mb-0 hidden-sm-down">
                                <thead className="thead-default">

                                <tr>
                                    <th width="5%">Id</th>
                                    <th width="35%">Job</th>
                                    <th width="60%">Skill</th>
                                </tr>

                                </thead>
                                <tbody>
                                    {JobSkillListRender}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobSkillTable