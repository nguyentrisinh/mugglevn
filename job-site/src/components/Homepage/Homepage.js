import React from 'react'
import {connect} from 'react-redux';


import Companies from './Companies';
import Jobs from './Jobs'
import {FetchHomepageCompany, FetchHomepageJob} from '../../actions/index'

class Homepage extends React.Component{
    render(){
        return(
            <div>
                <Jobs FetchHomepageJob={this.props.FetchHomepageJob} data={this.props.data.jobs} />
                <Companies data={this.props.data.companies} FetchHomepageCompany={this.props.FetchHomepageCompany}/>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        data:state.data.homepage
    }
);

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(Actions, dispatch)
// })

export default connect(
    mapStateToProps,
    {FetchHomepageCompany, FetchHomepageJob},
    // mapDispatchToProps
)(Homepage)
