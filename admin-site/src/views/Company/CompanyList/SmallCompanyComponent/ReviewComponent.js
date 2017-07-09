/**
 * Created by Asus on 4/20/2017.
 */
import React, { Component } from 'react'
import './ReviewComponent.css'


class ReviewComponent extends Component {
    render() {
        return (
            <div className="review-component">
                <div className="row">
                <div className="col-md-1 text-center">
                    <img src={this.props.data.avatar} className="img-avatar avatar-shadow" width="40px" height="40px" alt="admin@bootstrapmaster.com"/>
                </div>
                <div className="col-md-11">
                    <div>{this.props.data.content}</div>
                    <div className="small text-muted">
                        <span>{this.props.data.name}</span> | {this.props.data.time}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ReviewComponent;