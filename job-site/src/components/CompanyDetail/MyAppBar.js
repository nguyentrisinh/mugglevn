import React from 'react';
import {Navbar, Modal, Button, Icon, NavItem, Dropdown}from 'react-materialize'
import {Link} from 'react-router'
import Logo from '../../../public/logo.png'
import {connect} from 'react-redux'

class MyAppBar extends React.Component {
    render() {

        return (
            <div>
                <Navbar className="my-menu"
                        brand={<Link to='/'><img className="logo-img" src={Logo} alt=""/><span>muggle.vn</span></Link>}
                        right>
                    <li><Link activeClassName='' to='/company'>Doanh nghiêp</Link></li>
                    <li><Link to="/job">Công việc</Link></li>
                    {
                        function () {
                            if (this.props.user.username !== '')
                                return (
                                    <div className="logout">
                                        <Dropdown trigger={
                                            <Button>{this.props.user.full_name}</Button>
                                        }>
                                            <NavItem href="http://mugglevn.xyz/logout">Đăng xuất</NavItem>
                                        </Dropdown>
                                    </div>


                                )
                            else
                                return (
                                    <Modal
                                        header='muggle.vn'
                                        trigger={
                                            <Button waves='light'><span>Đăng nhập</span><Icon
                                                right>person_pin</Icon></Button>
                                        }>
                                        <div className="social-login">
                                            <a href="http://mugglevn.xyz/auth/login/facebook/">
                                                <Button className='button-facebook' waves='light'>
                                                    <strong>Login</strong> with <strong>Facebook</strong>
                                                    <i className="fa fa-facebook left"/>
                                                </Button>
                                            </a>
                                            <a
                                                href="http://mugglevn.xyz/auth/login/google-oauth2/">
                                                <Button className='button-google' waves='light'><strong>Login</strong>
                                                    with <strong>Google+</strong> <i
                                                        className="fa fa-google-plus left"/></Button>
                                            </a>
                                            <a
                                                href="http://mugglevn.xyz/auth/login/github/">
                                                <Button className='button-github' waves='light'><strong>Login</strong>
                                                    with <strong>Github</strong> <i
                                                        className="fa fa-github left"/></Button>
                                            </a>
                                            <a
                                                href="http://mugglevn.xyz/auth/login/linkedin-oauth2/">
                                                <Button className='button-linkedin' waves='light'><strong>Login</strong>
                                                    with <strong>Linkedin</strong> <i
                                                        className="fa fa-linkedin-square left"/></Button>
                                            </a>
                                        </div>
                                    </Modal>

                                )
                        }.bind(this)()
                    }
                    {
                        function () {
                            if (this.props.user.username !== '') {
                                return (
                                    <li><Link to="/form">Đề xuất việc làm</Link></li>
                                )
                            }
                        }.bind(this)()
                    }

                    {
                        function () {
                            if (this.props.user.username !== '') {
                                return (
                                    <li className="hide-on-large"><a href="http://mugglevn.xyz/logout/">Logout</a></li>
                                )
                            }
                        }.bind(this)()
                    }

                    {/*<li><Link to="/user">Về chúng tôi</Link></li>*/}
                </Navbar>
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
)(MyAppBar)