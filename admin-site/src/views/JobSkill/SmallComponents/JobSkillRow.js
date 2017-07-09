/**
 * Created by Asus on 5/10/2017.
 */
import React , {Component} from 'react'
import JobSkillFormEdit from './JobSkillFormEdit'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class JobSkillRow extends Component{
    constructor(props){
        super(props);

        this.state = {
            sua: false,
        };
        this.toggleSua= this.toggleSua.bind(this);
        this.toggleSave = this.toggleSave.bind(this);

    }

    toggleSua() {
        this.setState({
            sua: !this.state.sua
        });
    }

    toggleSave() {
        this.refs.jobskill_form.onClickSave();

        this.setState({
            sua:!this.state.sua,
        })
    }

    render(){

        function Job(props) {
            const jobId = props.data.job;
            var selectedJob = props.all_job_data.job.find(job => job.value === jobId);
            return <div>{selectedJob.label}</div>
        }

        function Skill(props) {
            const skillId = props.data.skill;
            var selectedSkill = props.all_skill_data.skill.find(skill => skill.value === skillId);
            return <div>{selectedSkill.label}: {props.data.description}</div>
        }


        return(
            <tr>
                <td className="align-text-top">
                    <div>
                        <p>{this.props.data.id}</p>
                    </div>
                </td>
                <td className="align-text-top">
                    {Job(this.props)}


                </td>
                <td className="align-text-top">
                    {Skill(this.props)}
                    <div className="float-right margin">
                        <button type="button" className="btn btn-link btn-sm" onClick={this.toggleSua}>Sửa</button>
                        <button type="button" className="btn btn-link btn-sm" onClick={()=>this.props.actions.deleteJobSkill(this.props.data)}>Xóa</button>

                        {/*onClick Sua button*/}
                        <Modal isOpen={this.state.sua} toggle={this.toggleSua} className={'modal-lg ' + this.props.className}>
                            <ModalHeader toggle={this.toggleSua}>User info</ModalHeader>
                            <ModalBody>
                                <JobSkillFormEdit
                                    data={this.props.data}
                                    ref="jobskill_form"
                                    actions={this.props.actions}
                                    all_job_data={this.props.all_job_data}
                                    all_skill_data={this.props.all_skill_data}
                                    flag_add={false}
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

export default JobSkillRow