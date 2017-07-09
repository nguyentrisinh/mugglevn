/**
 * Created by Asus on 5/7/2017.
 */
import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ReviewBlock from './SmallComponents/ReviewBlock'
import * as actions from '../../../actions/review-management'


class UserList extends Component {
    render(){
        return(
            <ReviewBlock
                data={this.props.review_data}
                actions={this.props.actions}
                all_company_data= {this.props.all_company_data}
                all_user_data={this.props.all_user_data}
            > </ReviewBlock>
        )
    }
}

function mapStateToProps(state){
    return{
        review_data: state.review_data,
        all_company_data: state.all_company_data,
        all_user_data: state.all_user_data,
    }
}

function matchDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);