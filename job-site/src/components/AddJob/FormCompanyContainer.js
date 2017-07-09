import React from 'react';
import {Row, Input, Icon, Button} from 'react-materialize';
import FormCompany from './FormCompany'
import axios from 'axios'
import {connect} from 'react-redux'
import {reset} from 'redux-form'

class FormCompanyContainer extends React.Component {
    submit = (values) => {
        axios.post('http://mugglevn.xyz/i/', values, {
            headers: {
                Authorization: ' Bearer ' + this.props.accesstoken
            }
        })
            .then(response => {
                alert('Dữ liệu đã được gửi đi');
                this.props.dispatch(reset('company'));
            })
            .catch((error) => {
                if (error.response) {
                    switch (error.response.status){
                        case 400:
                            alert('Dữ liệu không hợp lệ');
                    }

                }
            });
    };

    render() {
        return (
            <div className="form-area">
                <FormCompany onSubmit={this.submit}/>

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
)(FormCompanyContainer)