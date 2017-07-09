/**
 * Created by Asus on 5/1/2017.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import UserBlock from './SmallComponents/UserBlock'
import * as actions from '../../../actions/user-management'


class UserList extends Component {
    render(){
        return(
            <UserBlock data={this.props.user_data} actions={this.props.actions}> </UserBlock>
        )
    }
}

function mapStateToProps(state){
    return{
        user_data: state.user_data,
    }
}

function matchDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);