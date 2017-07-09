/**
 * Created by Asus on 5/4/2017.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SkillBlock from './SmallComponents/SkillBlock'
import * as actions from '../../../actions/skill-management'


class SkillList extends Component {
    render(){
        return(
            <SkillBlock data={this.props.skill_data} actions={this.props.actions}> </SkillBlock>
        )
    }
}

function mapStateToProps(state){
    return{
        skill_data: state.skill_data,
    }
}

function matchDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SkillList);