import React from 'react';
import JobCompany from './JobCompany';

import {connect} from 'react-redux';
import DescriptionJob from "./DescriptionJob";
import Skill from "./Skill";
import Benefits from "./Benefits";
import {FetchJob} from '../../actions/index'

import TimeAgo from 'react-timeago'
import viStrings from 'react-timeago/lib/language-strings/vi'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(viStrings);
import LoadingImage from '../Loading/LoadingImage'

class Job extends React.Component {
    componentWillMount() {
        this.props.FetchJob(this.props.params.id);
    }

    render() {
        if (this.props.loading)
            return (
                <div className="job-page-wrap">
                    <div className="job-page">

                        <LoadingImage/>
                    </div>
                </div>
            )
        else
            return (
                <div className="job-page-wrap">
                    <h5 className="job-name">{this.props.data.name}
                        <TimeAgo date={this.props.data.created_at} formatter={formatter}

                        /></h5>

                    <div className="job-page">
                        <div className='section-job'>
                            <JobCompany data={this.props.data}/>
                            <DescriptionJob data={this.props.data.description}/>
                        </div>
                        <div className="section-skill-benefit">
                            <Skill data={this.props.data.skills.data}/>
                            <Benefits data={this.props.data.benefits.data}/>
                        </div>
                    </div>
                </div>
            )
    }
}


const mapStateToProps = state => (
    {
        loading: state.data.job.loading,
        data: state.data.job.data
    }
);

export default connect(
    mapStateToProps,
    {FetchJob}
)(Job)
