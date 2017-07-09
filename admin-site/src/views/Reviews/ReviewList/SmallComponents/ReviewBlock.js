/**
 * Created by Asus on 5/7/2017.
 */
import React, {Component} from 'react'
import ReviewRow from './ReviewRow'

class ReviewBlock extends Component{
    render(){

        var ReviewListRender = this.props.data.review.map((review) => {
            return(
                <ReviewRow
                    key={review.id}
                    data={review}
                    actions={this.props.actions}
                    all_company_data= {this.props.all_company_data}
                    all_user_data={this.props.all_user_data}
                />
            )
        })

        return(
            <div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Review List
                        </div>
                        <div className="card-block">
                            <table className="table table-outline mb-0 hidden-sm-down table-striped">
                                <thead className="thead-default">

                                <tr>
                                    <th width="15%">Title</th>
                                    <th width="30%">Review</th>
                                    <th className="text-center" width="20%">Author</th>
                                    <th className="text-center" width="10%">Rating</th>
                                </tr>

                                </thead>
                                <tbody>
                                {ReviewListRender}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewBlock;