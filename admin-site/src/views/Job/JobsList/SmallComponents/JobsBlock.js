/**
 * Created by Asus on 4/27/2017.
 */
import React, {Component} from 'react'
import JobRow from './JobRow'


class JobsBlock extends Component {
    render(){

        var JobRender = this.props.data.job.map((job) => {
            return(
                <JobRow
                    data={job}
                    actions={this.props.actions}
                    key={job.id}
                    company_data={this.props.company_data}
                    constant_data={this.props.constant_data}
                    all_user_data={this.props.all_user_data}
                > </JobRow>
            )
        })

        return(
            <div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Jobs List
                        </div>
                        <div className="card-block">
                            <table className="table table-hover table-outline mb-0 hidden-sm-down">
                                <thead className="thead-default">

                                <tr>
                                    <th className="text-center" width="7%"><i className="icon-picture"></i></th>
                                    <th>Job Detail</th>
                                    <th className="text-center" width="15%">Full Time</th>
                                    {/*<th className="text-center" width="15%">Apply Number</th>*/}
                                    <th className="text-center" width="15%">Location</th>
                                </tr>

                                </thead>
                                <tbody>
                                    {JobRender}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JobsBlock;