import React from 'react';
import {Row, Col, Button, Modal} from 'react-materialize'
import DescriptionCompany from './DescriptionCompany'
import {Link} from 'react-router'
import MultiLine from '../Helper/MultiLine'
import {connect} from 'react-redux'

class JobCompany extends React.Component {
    renderButton() {
        var today = new Date();
        if (this.props.user.username.trim() === '') {
            return (
                <Button disabled={true} waves='light' className='button-overtime'>{
                    <span>Vui lòng đăng nhập</span>}</Button>

            )
        }
        else if (new Date(this.props.data.expired_at) > today) {
            return (
                <Modal
                    header='Cách ứng tuyển'
                    trigger={
                        <Button waves='light' className='button-apply'>{
                            <span>Ứng tuyển</span>}</Button>
                    }>
                    {MultiLine(this.props.data.how_to_apply)}
                    <Button waves='light' className='button-apply'><a style={{color: 'black'}}
                                                                      href={this.props.data.company_apply_link}>Đến
                        trang Ứng tuyển</a></Button>
                </Modal>
            )
        }
        else {
            return (
                <Button disabled={true} waves='light' className='button-overtime'>{
                    <span>Hết hạn</span>}</Button>

            )
        }
    }

    render() {
        return (
            <div className="background-image">
                <div className="company-section">
                    <Row>
                        <Col s={5}>
                            <Link to={'/company/' + this.props.data.company_slug}><img
                                alt={this.props.data.company_name} className="avatar"
                                src={this.props.data.company_logo}/></Link>

                        </Col>
                        <Col s={7}>
                            <DescriptionCompany data={this.props.data}/>
                        </Col>
                    </Row>
                    <Row className='bottom-wrap'>
                        <Col s={5}>
                            <h5 className="name">{this.props.data.company_name}</h5>
                            <p className="address">{this.props.data.company_district}</p>

                        </Col>

                        <Col s={7}>
                            {this.renderButton()}

                        </Col>

                    </Row>
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => (
    {
        user: state.data.userinfo.user
    }
);

export default connect(
    mapStateToProps
)(JobCompany)
