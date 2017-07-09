/**
 * Created by Asus on 4/26/2017.
 */
import React, {Component} from 'react'
import JobsBlock from './SmallComponents/JobsBlock'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../../actions/job-management'


class JobsList extends Component{
    render(){
        return(
            <div>
                <JobsBlock
                    data={this.props.job_data}
                    company_data={this.props.company_data}
                    actions={this.props.actions}
                    constant_data={this.props.constant_data}
                    all_user_data={this.props.all_user_data}
                />
            </div>
        )
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state){
    return{
        job_data: state.job_data,
        company_data: state.company_data,
        constant_data: state.constant_data,
        all_user_data: state.all_user_data
    };
}

function matchDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(JobsList);

