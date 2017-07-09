/**
 * Created by Asus on 5/1/2017.
 */
import React, {Component} from 'react'
import UserForm from './UserForm'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class UserRow extends Component {
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
        this.refs.user_form.onClickSave();

        this.setState({
            sua:!this.state.sua,
        })
    }


    render(){
        return(
                <tr>
                    <td className="align-text-top">
                        <div>
                            <p>{this.props.data.user}</p>
                        </div>
                    </td>
                    <td className="align-text-top">
                        <div><strong className="job-header">{this.props.data.last_name} {this.props.data.first_name}</strong></div>
                        <div className="job-detail" >
                            <span> {this.props.data.bio}</span>
                        </div>
                        <div className="float-right margin">
                            <button type="button" className="btn btn-link btn-sm" onClick={this.toggleSua}>Sửa</button>
                            <button type="button" className="btn btn-link btn-sm" onClick={()=>this.props.actions.deleteUser(this.props.data)}>Xóa</button>

                            {/*onClick Sua button*/}
                            <Modal isOpen={this.state.sua} toggle={this.toggleSua} className={'modal-lg ' + this.props.className}>
                                <ModalHeader toggle={this.toggleSua}>User info</ModalHeader>
                                <ModalBody>
                                    <UserForm
                                        data={this.props.data}
                                        ref="user_form"
                                        updateUser={this.props.actions.updateUser}
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
                        {this.props.data.university_name} - {this.props.data.faculty_name}
                    </td>
                    <td className="text-center align-text-top">
                        {this.props.data.birth_date}
                    </td>
                </tr>
        )
    }
}

export default UserRow;