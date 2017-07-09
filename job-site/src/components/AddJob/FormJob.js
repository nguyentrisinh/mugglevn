import React from 'react';
import { Field, reduxForm,formValueSelector } from 'redux-form';
import $ from 'jquery';
import {change} from 'redux-form'
import {connect} from 'react-redux'

import {Row, Input, Icon, Button} from 'react-materialize'


class FormJob extends React.Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <div className="col input-field s12">
                        <i className="material-icons prefix">business</i>
                        <Field type="text" className="validate" name="company_name" component="input"/>
                            <label className="" htmlFor="company_name">Tên công ty đăng tuyển</label>
                    </div>
                    <div className="col input-field s12">
                        <i className="material-icons prefix">work</i>
                        <Field type="text" className="validate" name="name" component="input"/>
                            <label className="" htmlFor="name">Tên công việc</label>
                    </div>
                    <div className="col input-field s12">
                        <i className="material-icons prefix">new_releases</i>
                        <Field name="expired_at" placeholder="yyyy-mm-dd" type="text" component="input"/>
                        <label htmlFor="expired_at" className="label active">Ngày hết hạn</label>
                    </div>
                    <div className="col s12">
                        <div className="input-field">
                            <i className="material-icons prefix">alarm_on</i>
                        </div>
                        <div style={{marginLeft: '42px',position:"relative"}}>
                            <Field type="checkbox" className="filled-in isfulltime" name="is_full_time" component="input"/>
                            <label className="active" htmlFor="is_full_time">Nhận Partime</label>
                        </div>

                    </div>
                    <div className="col input-field s12">
                        <i className="material-icons prefix">link</i>
                        <Field type="text"
                               component="input"
                               className="validate"
                               name="company_apply_link"
                               placeholder="Link đăng tuyển gốc của công ty"/>
                        <label
                            className="active" htmlFor="company_apply_link">Link apply</label>
                    </div>
                    <div className="input-field col s12">
                        <i className="material-icons prefix">info</i>
                        <Field name="description" className="materialize-textarea" component="textarea"/>
                        <label className="label" htmlFor="description">Mô tả công việc</label>
                    </div>
                    {/*<div className="input-field col s12">*/}
                        {/*<i className="material-icons prefix">assignment_late</i>*/}
                        {/*<textarea id="textarea4" className="materialize-textarea"></textarea>*/}
                        {/*<label className="label" htmlFor="textarea4">Kỹ năng yêu cầu</label>*/}
                    {/*</div>*/}
                    {/*<div className="input-field col s12">*/}
                        {/*<i className="material-icons prefix">star</i>*/}
                        {/*<textarea id="textarea5" className="materialize-textarea"></textarea>*/}
                        {/*<label className="label" htmlFor="textarea5">Phúc lợi công việc</label>*/}
                    {/*</div>*/}
                </Row>
                <Row className='submit'>
                    <Button>Submit</Button>
                </Row>
            </form>
        )
    }
}


FormJob = reduxForm({
    form: 'job'
})(FormJob);


export default connect()(FormJob)