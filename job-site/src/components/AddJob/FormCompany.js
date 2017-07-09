import React from 'react';


import {Row, Input, Icon, Button} from 'react-materialize';
import { Field, reduxForm } from 'redux-form';

import ReactMaterialSelect from 'react-material-select'

class MySelect extends React.Component{
    render(){
        const {input:{onChange}}=this.props;
        return (
        <ReactMaterialSelect onChange={
            (selected)=>{
                onChange(selected.value)
            }} label="Loại công ty" resetValue="Reset">
            <option dataValue="1">Product</option>
            <option dataValue="2">Outsource</option>
        </ReactMaterialSelect>
        )
    }
}


class FormCompany extends React.Component {
    render() {
        const {handleSubmit} =this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Row>
                    <div className="col input-field s12">
                        <i className="material-icons prefix">business</i>
                        <Field type="text" component="input" className="validate" name="name"/>
                            <label className="" htmlFor="name">Tên công ty</label>
                    </div>

                {/*<div className="col file-field input-field s12">*/}

                    {/*<i className="material-icons prefix">label</i>*/}
                    {/*<Button className='btn-logo' waves='light'>Upload Logo </Button>*/}
                    {/*<div className="file-path-wrapper">*/}
                        {/*<input style={{width: '100%'}} type="file"/>*/}
                        {/*<input style={{boxSizing: 'border-box', width: '100%'}} className="file-path validate"*/}
                               {/*type="text"/>*/}
                    {/*</div>*/}
                {/*</div>*/}

                    <div className="col input-field s12">
                        <i className="material-icons prefix">language</i>
                        <Field className="validate" type="text" name="website" component="input"/>
                            <label className="" htmlFor="website">Website</label>
                    </div>
                <div className="col input-field s12">
                    <i className="material-icons prefix">label</i>
                    <Field name="type" component={MySelect}/>
                </div>
                {/*<div className="col input-field s12">*/}
                    {/*<i className="material-icons prefix">group_work</i>*/}
                    {/**/}
                    {/*<input*/}
                    {/*type="text"*/}
                    {/*className="validate"*/}
                    {/*id="input_4"*/}
                    {/*placeholder="Vd: Trên 100 người"/>*/}
                    {/*<label*/}
                    {/*className="active" htmlFor="input_4">Quy mô</label></div>*/}
                    <div className="col input-field s12">
                        <i className="material-icons prefix">email</i>
                        <Field type="email" className="validate" name="email" component="input"/>
                            <label className="" htmlFor="email">Email</label>
                    </div>
                    <div className="col input-field s12">
                        <i className="material-icons prefix">my_location</i>
                        <Field type="text" className="validate" name="address" component="input"/>
                            <label className="" htmlFor="address">Địa chỉ</label>
                    </div>

                {/*<div className="input-field col s12">*/}
                    {/*<i className="material-icons prefix">turned_in</i>*/}
                    {/*<textarea id="textarea1" className="materialize-textarea"></textarea>*/}
                    {/*<label className="label" htmlFor="textarea1">Slogan</label>*/}
                {/*</div>*/}
                <div className="input-field col s12">
                    <i className="material-icons prefix">info</i>
                    <Field name="overview" className="materialize-textarea" component="textarea" type="text"/>
                    <label className="label" htmlFor="overview">Giới thiệu</label>
                </div>
                </Row>
                <Row className='submit'>
                    <Button>Submit</Button>
                </Row>
            </form>
        )
    }
}


FormCompany = reduxForm({
    form: 'company'
})(FormCompany);

export default FormCompany;
