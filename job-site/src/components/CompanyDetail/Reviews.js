import React from 'react';
import {CardPanel, Badge, Collapsible, CollapsibleItem, Button, Icon} from 'react-materialize';
import ShowMore from 'react-show-more';
import {FetchReview} from '../../actions/index'
import {connect} from 'react-redux';
import TimeAgo from 'react-timeago'
import viStrings from 'react-timeago/lib/language-strings/vi'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(viStrings);

class Reviews extends React.Component {
    componentWillMount(){
        this.props.FetchReview(this.props.company);

    }
    renderItems = (comments) => {
        console.log(comments);
        if (comments)
        {
        return (comments.map(
            (data) => {
                return (
                        <div className="all-comment" key={data.id}>
                            <CardPanel key={data.id} className="item">
                                <div className="item-wrap">
                                    <Badge className='star'>
                                        {data.rating}&nbsp;
                                    </Badge>
                                    <div className="info">
                                        < span className="name">{data.title}</span>
                                        <span className="time">
                                        <TimeAgo date={data.created_at} formatter={formatter}/></span>
                                    </div>
                                    <div className="vote-wrap">

                                        <Badge className='vote dislike'>
                                            {data.disliked_users.length}&nbsp;
                                        </Badge>
                                        <Badge className='vote like'>
                                            {data.liked_users.length}&nbsp;
                                        </Badge>
                                    </div>

                                </div>
                                <div className="divider">
                                </div>
                                <div className="content">
                                    <h5 className="type">
                                        Điều tôi thích
                                    </h5>
                                    <ShowMore
                                        lines={2}
                                        more='Show more'
                                        less='Show less'
                                    >{data.what_user_like}
                                    </ShowMore>
                                    <h5 className="type">
                                        Điều tôi không thích
                                    </h5>
                                    <ShowMore
                                        lines={2}
                                        more='Show more'
                                        less='Show less'
                                    >{data.what_user_dislike}
                                    </ShowMore>
                                </div>
                            </CardPanel>
                            {/*<Comment/>*/}
                        </div>

                    )
                }
            ))}
            else{
            return (
                <h5>Hiện không có đánh giá nào</h5>
            )

        };
    };

    render() {
        return (
            <div className="evaluation">
                <h5 className="title">Đánh giá</h5>
                {this.renderItems(this.props.data)}
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
    }
);

export default connect(
    mapStateToProps,
    {FetchReview}
)(Reviews)