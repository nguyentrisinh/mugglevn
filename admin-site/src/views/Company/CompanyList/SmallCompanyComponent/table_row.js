/**
 * Created by Asus on 4/17/2017.
 */
import React, { Component } from 'react'
import { Progress } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import {deleteCompany} from '../../../actions/company-management'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
import CompanyForm from './CompanyForm'
import CompanyInfo from './CompanyInfo'
import './table_row.css'
class TableRow extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sua: false,
            xem: false,

        };
        this.toggleSua= this.toggleSua.bind(this);
        this.toggleXem= this.toggleXem.bind(this);
        this.toggleSave= this.toggleSave.bind(this);
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

    toggleXem() {
        this.setState({
            xem: !this.state.xem
        })
    }


    render(){
        return(
            <tr>
                <td className="text-center align-text-top">
                    <div className="avatar">
                        <img src={this.props.data.logo} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                        <span className="avatar-status badge-success"></span>
                    </div>
                </td>
                <td>
                    <div><strong>{this.props.data.name}</strong></div>
                    <div className="small">
                        <span>{this.props.data.bio}</span> | {this.props.data.location}
                    </div>
                    <div>
                        <div className="float-right">
                        <button type="button" className="btn btn-link btn-sm" onClick={this.toggleXem}>Xem</button>
                        <button type="button" className="btn btn-link btn-sm"  onClick={this.toggleSua}>Sửa</button>
                        <button type="button" className="btn btn-link btn-sm" onClick={()=>this.props.deleteCompany(this.props.data)}>Xóa</button>
                        </div>

                        <p className="float-left"><i className="fa fa-star bg-primary icon-padding"></i>&nbsp; {this.props.data.rating / 10}</p>


                        {/*onClick Sua button*/}
                        <Modal isOpen={this.state.sua} toggle={this.toggleSua} className={'modal-lg ' + this.props.className}>
                        <ModalHeader toggle={this.toggleSua}>Company info</ModalHeader>
                        <ModalBody>
                            <CompanyForm
                                data={this.props.data}
                                constant_data={this.props.constant_data}
                                ref="company_form"
                                updateCompany={this.props.updateCompany}
                                company_data={this.props.company_data}
                            />
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.toggleSave}>Update</Button>{' '}
                        <Button color="secondary" onClick={this.toggleSua}>Cancel</Button>
                        </ModalFooter>
                        </Modal>

                        {/*onClick Xem button*/}
                        <Modal isOpen={this.state.xem} toggle={this.toggleXem} className={'modal-lg ' + this.props.className}>
                            <ModalHeader toggle={this.toggleXem}>Modal title</ModalHeader>
                            <ModalBody>
                                {/*<CompanyForm data={this.props.data} ref="company_form"/>*/}
                                <CompanyInfo data={this.props.data}/>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleXem}>Cancel</Button>
                            </ModalFooter>
                        </Modal>

                    </div>
                </td>
                <td className="text-center">
                    <img src={this.props.data.nation_icon} style={{height: 24 + 'px'}}/>
                </td>
                <td>
                    <div className="clearfix">
                        <div className="float-left">
                            <strong>{this.props.data.post_percentage}%</strong>
                        </div>
                        <div className="float-right">
                            <small className="text-muted">{this.props.data.post_count}/{this.props.data.total_post} jobs</small>
                        </div>
                    </div>
                    <Progress className="progress-xs" color="success" value={this.props.data.post_percentage} />
                </td>
            </tr>



        )
    }
}

// function mapStateToProps(state){
//     return{
//
//     };
// }
//
// function matchDispatchToProps(dispatch){
//     return bindActionCreators({deleteCompany: deleteCompany}, dispatch)
// }
//
// export default connect(mapStateToProps)(Company);

export default TableRow;