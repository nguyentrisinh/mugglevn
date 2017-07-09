import React from 'react';
import MyAppBar from '../components/CompanyDetail/MyAppBar';
import Footer from '../components/Homepage/Footer';
import {FetchUser} from '../actions/index'

import {connect} from 'react-redux';


class App extends React.Component {
    componentWillMount(){
        console.log('app')
      this.props.FetchUser(this.props.client_id,this.props.client_secret);
    };
    render(){
        return(
            <div>
                <MyAppBar/>
                {this.props.children}
                <Footer/>
            </div>)
    }
}


const mapStateToProps = state => (
    {
        client_secret: state.data.secretkey,
        client_id:state.data.id,
    }
);

export default connect(
    mapStateToProps,
    {FetchUser}
)(App)