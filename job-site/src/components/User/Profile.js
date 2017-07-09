import React from 'react'
import ListJob from "./ListJob";
import {connect} from 'react-redux';
import {Col,Row} from 'react-materialize'
// import {FetchJobCompany} from '../../actions/index'

class Profile extends React.Component{
    render(){
        return(
        <div className="my-container profile">
            <Row>
            <Col className='avatar' s={12} l={4}>
                <img src={this.props.data.data.avatar} alt=""/>
                <h5 className="name">{this.props.data.data.name}</h5>
            </Col>
            <Col className='jobs' s={12} l={8}>
                <ListJob data={this.props.data}/>
            </Col>
            </Row>
        </div>
        )
    }
}

const mapStateToProps = state => (
    {
        data: state.data.profile
    }
);

export default connect(
    mapStateToProps
)(Profile)