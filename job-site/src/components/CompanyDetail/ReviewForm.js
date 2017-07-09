import React from 'react';

import {connect} from 'react-redux';

import star from '../../img/star.png'
import staractive from '../../img/staractive.png'

import Rating from 'react-rating'

import { Field, reduxForm,change,initialize } from 'redux-form';

import {Button, Icon} from 'react-materialize'

class MyRating extends  React.Component{
    constructor () {
        super()
        this.state = {
            starRating:3.3
        }
    }

    changeRate(name, value) {
        change(name, value);
        this.setState({ starRating: value });
    }
    render(){
        const { input: {onChange } } = this.props

        return (

            <Rating
                onChange={
                    (value) => { onChange(value);
                    this.changeRate("rating",value)}
                 }
                initialRate={ this.state.starRating }
                empty={<img alt="Rating Star" src={star} className="icon"/>}
                placeholder={<img alt="Rating Star" src={staractive} className="icon"/>}
                full={<img alt="Rating Star" src={staractive} className="icon"/>}
                fractions={1}
            />

        )
    }
}

class ReviewForm extends React.Component {
    render() {
        const {handleSubmit} =this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="rating">
                    <Field name="rating" component={MyRating}/>
                </div>

                <div className="input-wrap">

                    <div className="input-field col s12">
                        <Field name="what_user_like" component="textarea" type="text" className="materialize-textarea"/>
                        <label className="label" htmlFor="what_user_like">Điều bạn thích?</label>

                    </div>
                    <div className="input-field col s12">
                        <Field name="what_user_dislike" component="textarea" type="text" className="materialize-textarea"/>
                        <label className="label" htmlFor="what_user_dislike">Điều bạn không thích ?</label>
                    </div>
                    {
                        function(){
                            if (this.props.user.username.trim()!=='')
                            {
                                return(

                                <Button onClick={handleSubmit} large={false} waves='light' className='button-send'>Gửi<Icon
                                    right>navigation</Icon></Button>
                                )
                            }
                            else{
                                return(
                                    <Button disabled={true} waves='light' className='button-send'>{
                                        <span>Vui lòng đăng nhập</span>}</Button>
                                )
                            }
                        }.bind(this)()

                    }
                </div>
            </form>
        )
    }
}


ReviewForm = reduxForm({
    form: 'review'
})(ReviewForm);

ReviewForm = connect(
    // state =>({
    //     initialValues:{
    //         company:state.data.companydetail.data.slug}
    // })
)(ReviewForm);

const mapStateToProps = state => (
    {
        user: state.data.userinfo.user
    }
);

export default connect(
    mapStateToProps
)(ReviewForm)
