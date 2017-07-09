/**
 * Created by Asus on 4/27/2017.
 */
import React, {Component} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './JobRow.css'
import JobForm from './JobForm'

class JobRow extends Component{
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
        this.refs.company_form.onClickSave();

        this.setState({
            sua:!this.state.sua,
        })
    }


    render(){

        var tagRender = this.props.data.tags.map((tag) =>{
            return(
                <button type="button" className="btn btn-danger btn-sm margin">{tag}</button>
            )
        });

        function Greeting(props) {
            const isFullTime = props.data.is_fulltime;
            if (isFullTime ) {
                return <div>Full Time</div>;
            }
            return <div>Part Time</div>;
        }

        return(
            <tr>
                <td className="text-center align-text-top">
                    <div className="avatar">
                        <img src={this.props.data.company_avatar} width="46px" height="46px" role="presentation"/>
                    </div>
                </td>
                <td>
                    <div><strong className="job-header">{this.props.data.name}</strong></div>
                    <div className="job-detail" >
                        {/*<p className="salary-detail">&#36; 15.000.000tr </p>*/}
                        <span>{this.props.data.description}</span>
                        <p>
                            <span>
                                    {tagRender}
                            </span>
                            <div className="float-right margin">
                                <button type="button" className="btn btn-link btn-sm" onClick={this.toggleSua} >Sửa</button>
                                <button type="button" className="btn btn-link btn-sm" onClick={()=>this.props.actions.deleteJob(this.props.data)}>Xóa</button>
                            </div>

                            {/*onClick Sua button*/}
                            <Modal isOpen={this.state.sua} toggle={this.toggleSua} className={'modal-lg ' + this.props.className}>
                                <ModalHeader toggle={this.toggleSua}>Company info</ModalHeader>
                                <ModalBody>
                                    <JobForm
                                        data={this.props.data}
                                        ref="company_form"
                                        updateJob={this.props.actions.updateJob}
                                        company_data={this.props.company_data}
                                        constant_data={this.props.constant_data}
                                        all_user_data={this.props.all_user_data}
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggleSave}>Update</Button>{' '}
                                    <Button color="secondary" onClick={this.toggleSua}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </p>
                    </div>
                    {/*<div>*/}
                        {/*<div className="float-right">*/}
                            {/*<button type="button" className="btn btn-link btn-sm" onClick={this.toggleXem}>Xem</button>*/}
                            {/*<button type="button" className="btn btn-link btn-sm"  onClick={this.toggleSua}>Sửa</button>*/}
                            {/*<button type="button" className="btn btn-link btn-sm" onClick={()=>this.props.deleteCompany(this.props.data)}>Xóa</button>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </td>
                <td className="text-center align-text-top">
                    {Greeting(this.props)}
                </td>
                {/*<td className="text-center align-text-top" >*/}
                    {/*<div>{this.props.data.num_of_apply}/{this.props.data.num_required} applied</div>*/}
                {/*</td>*/}
                <td className="text-center align-text-top">
                    <div>{this.props.data.district}</div>
                </td>
            </tr>

        )
    }
}
export default JobRow