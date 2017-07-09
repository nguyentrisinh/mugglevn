import React from 'react'


export default class Comment extends React.Component {
    renderComments = (items) => {
        return (
            items.map(
                (data) => {
                    return (
                        <CardPanel key={data.id} className="item">
                            <div className="item-wrap">
                                <img src={data.avatar} alt=""/>
                                <div className="info">
                                    < span className="name">{data.name}</span>
                                    <span className="time">{data.time}</span>
                                </div>
                            </div>
                            <div className="divider">
                            </div>
                            <div className="content">

                                <ShowMore
                                    lines={2}
                                    more='Show more'
                                    less='Show less'
                                >{data.content}
                                </ShowMore>
                            </div>
                        </CardPanel>
                    )
                }
            )
        )
    };

    render() {
        return (
            <div className="comments-wrap">
                <Collapsible className='comments'>
                    <CollapsibleItem header={'Có ' + data.numberofcomments + ' comments'} icon='comment'>
                        <div className="input-wrap">
                            <div className="input-field col s12">
        <textarea id="textarea3" className="materialize-textarea">

        </textarea>
                                <label className="label" htmlFor="textarea3">Reply</label>
                                <Button large={false} waves='light' className='button-send'>Gửi<Icon
                                    right>navigation</Icon></Button>
                            </div>

                        </div>
                        <div className="wrap-content">
                            <h6>Bình luận</h6>
                            {this.renderComments(data.comments)}
                        </div>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
}