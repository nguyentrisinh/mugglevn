/**
 * Created by Asus on 5/4/2017.
 */
import React, {Component} from 'react'
import SkillForm from './SkillForm'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SkillRow extends Component {
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
        this.refs.skill_form.onClickSave();

        this.setState({
            sua:!this.state.sua,
        })
    }

    render(){
        return(
            <tr>
                <td className="align-text-top">
                    <div>
                        <p>{this.props.data.id}</p>
                    </div>
                </td>
                <td className="align-text-top">
                    <div><strong className="job-header">{this.props.data.name}</strong></div>
                    <div className="job-detail" >
                        <span> {this.props.data.description}</span>
                    </div>
                    <div className="float-right margin">
                        <button type="button" className="btn btn-link btn-sm" onClick={this.toggleSua}>Sửa</button>
                        <button type="button" className="btn btn-link btn-sm" onClick={()=>this.props.actions.deleteSkill(this.props.data)}>Xóa</button>

                        {/*onClick Sua button*/}
                        <Modal isOpen={this.state.sua} toggle={this.toggleSua} className={'modal-lg ' + this.props.className}>
                            <ModalHeader toggle={this.toggleSua}>User info</ModalHeader>
                            <ModalBody>
                                <SkillForm
                                    data={this.props.data}
                                    ref="skill_form"
                                    updateUser={this.props.actions.updateSkill}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.toggleSave}>Update</Button>{' '}
                                <Button color="secondary" onClick={this.toggleSua}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </td>
            </tr>
        )
    }

}

export default SkillRow;