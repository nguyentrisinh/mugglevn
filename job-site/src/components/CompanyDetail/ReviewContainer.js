import React from 'react'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'
import axios from 'axios';
import {initialize} from 'redux-form'
import {connect} from 'react-redux';
import {FetchReview} from '../../actions/index'


class ReviewContainer extends React.Component {
    submit = (values) => {
        axios.post('http://mugglevn.xyz/me/r', Object.assign({},values,{company:this.props.company}),{
            headers:{
                Authorization:' Bearer '+this.props.accesstoken
            }
        })
            .then(response => {
                alert('Đánh giá của bạn đã được ghi nhận');
                this.props.FetchReview(this.props.company);
            })
            .catch((error) => {
                if (error.response.data.rating){
                    alert('Bạn chưa cho điểm đánh giá, Vui lòng nhấn vào ngôi sao để cho điểm');
                }
                else
                if (error.response.data.what_user_like){
                    alert('Vui lòng điền nội dung bạn thích về công ty');
                }
                else
                if (error.response.data.what_user_dislike){
                    alert('Vui lòng điền nội dung bạn không thích về công ty');
                }
                else
                    alert('Bạn đã đánh giá cho công ty này rồi');


            });
    };
    render() {
        return (
            <div>
                <div className="input-area">
                    <ReviewForm company={this.props.company} onSubmit={this.submit}/>
                </div>
                <Reviews company={this.props.company} data={this.props.data}/>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        accesstoken: state.data.userinfo.token.access_token
    }
);

export default connect(
    mapStateToProps,
    {FetchReview},
)(ReviewContainer)