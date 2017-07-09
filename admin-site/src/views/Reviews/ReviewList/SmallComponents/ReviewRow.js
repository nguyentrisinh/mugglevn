/**
 * Created by Asus on 5/7/2017.
 */
import React, {Component} from 'react'
import ReviewForm from './ReviewForm'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ReviewRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            sua: false,
        }
        this.toggleSua= this.toggleSua.bind(this);
        this.toggleSave = this.toggleSave.bind(this);

    }

    toggleSua() {
        this.setState({
            sua: !this.state.sua
        });
    }

    toggleSave() {
        this.refs.review_form.onClickSave();

        this.setState({
            sua:!this.state.sua,
        })
    }


    render(){
        return(
            <tr>
                <td className="align-text-top">
                    <div>
                        <p>{this.props.data.title}</p>
                    </div>
                </td>
                <td className="align-text-top">
                    {/*<div><strong className="job-header">What user like</strong></div>*/}
                    {/*<div className="review-detail" >*/}
                        {/*<span><strong>what user like:</strong> {this.props.data.what_user_like}</span>*/}
                    {/*</div>*/}
                    {/*/!*<div><strong className="job-header">What user dislike</strong></div>*!/*/}
                    {/*<div className="review-detail" >*/}
                        {/*<span><strong>what user dislike:</strong> {this.props.data.what_user_dislike}</span>*/}
                    {/*</div>*/}

                    <ul>
                        <li><strong>What user like:</strong> {this.props.data.what_user_like}</li>
                        <li><strong>What user dislike:</strong> {this.props.data.what_user_dislike}</li>
                    </ul>

                    <div className="float-right margin">
                        <button type="button" className="btn btn-link btn-sm" onClick={this.toggleSua}>Sửa</button>
                        <button type="button" className="btn btn-link btn-sm" onClick={()=>this.props.actions.deleteReview(this.props.data)}>Xóa</button>

                        {/*onClick Sua button*/}
                        <Modal isOpen={this.state.sua} toggle={this.toggleSua} className={'modal-lg ' + this.props.className}>
                            <ModalHeader toggle={this.toggleSua}>User info</ModalHeader>
                            <ModalBody>
                                <ReviewForm
                                    data={this.props.data}
                                    ref="review_form"
                                    updateReview= {this.props.actions.updateReview}
                                    all_company_data= {this.props.all_company_data}
                                    all_user_data={this.props.all_user_data}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleSave}>Update</Button>{' '}
                                <Button color="secondary" onClick={this.toggleSua}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </td>
                <td className="text-center align-text-top">
                    {this.props.data.author}
                </td>
                <td className="text-center align-text-top">
                    {this.props.data.rating}
                </td>
            </tr>
        )
    }
}

export default ReviewRow;