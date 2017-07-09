import React from 'react';
import axios from 'axios';

import FormJob from './FormJob'
import {reset} from 'redux-form'
import {connect} from 'react-redux'

// require('materialize-css/js/date_picker/picker.js');
// require('materialize-css/js/date_picker/picker.date.js');

class FormJobContainer extends React.Component {


    submit = (values) => {
        axios.post('http://mugglevn.xyz/j/',
            Object.assign({},{is_full_time:false},values,{expired_at:values.expired_at+"T12:00:00"})
            , {
                headers: {
                    Authorization: ' Bearer ' + this.props.accesstoken
                }
            })
            .then(response => {
                alert('Dữ liệu đã được gửi đi');
                this.props.dispatch(reset('job'));
            })
            .catch((error) => {
                if (error.response) {
                    switch (error.response.status) {
                        case 400:
                            alert('Dữ liệu không hợp lệ');
                    }

                }
            });
    };


    render() {
        return (
            <div className="form-area">
                <FormJob onSubmit={this.submit}/>

            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        accesstoken: state.data.userinfo.token.access_token
    }
);

export default connect(
    mapStateToProps
)(FormJobContainer)