import React, {Component} from 'react'
import DescriptionCompany from './DescriptionCompany'
import AboutUs from './AboutUs'
import ListJob from "./ListJob";
import {MediaBox} from 'react-materialize'
import {PropTypes} from 'react'

export default class OverView extends Component {

    render() {
        return (
            <div style={{overflow: 'hidden'}}>
                <div className="background-image">
                <div className="description-wrap">
                <MediaBox className="avatar" src={this.props.data.logo} caption={this.props.data.name} />
                <DescriptionCompany data={this.props.data}/>
                </div>
                </div>
                <AboutUs data={this.props.data}/>
                <ListJob data={this.props.data.job_set}/>
            </div>)
    }
}

OverView.propTypes={
  data:  PropTypes.object.isRequired
};