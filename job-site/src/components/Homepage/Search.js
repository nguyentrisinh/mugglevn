import React from 'react'
import ReactMaterialSelect from 'react-material-select'
import {Button, Icon} from 'react-materialize'
import {Link} from 'react-router'
import {GetKeySearch} from '../../actions/index'
import {connect} from 'react-redux';

class Search extends React.Component {
    componentDidMount() {
        this.refs.search.value = this.props.data;
    }

    handleClick = () => {
        this.props.GetKeySearch(this.refs.search.value);
    };

    handleClear() {
        this.refs.search.value = "";
        this.refs.search.focus();
    }

    render() {
        return (
            <div className="section-search-wrap">
                <div className="my-container">
                    <div className="intro">
                        <h5>Cơ hội thực tập cho sinh viên IT tại HCM</h5>
                        <p>Hãy bắt đầu con đường sự nghiệp IT của bạn tại muggle.vn. Chúng tôi đặt quyền lợi của sinh viên là trên hết và bảo mật tuyệt đối thông tin của sinh viên.</p>
                    </div>
                    <div className="section-search">
                        <div className="input-field search-bar">
                            <input ref="search" id="search" type="search" required
                                   placeholder="Tìm kiếm công việc thực tập"/>
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons" onClick={this.handleClear.bind(this)}>close</i>
                        </div>
                        {/*<ReactMaterialSelect label="Chọn địa chỉ bạn muốn làm" resetLabel="Toàn bộ">*/}
                        {/*<option dataValue="Quận 1">Quận 1</option>*/}
                        {/*<option dataValue="Quận 2">Quận 2</option>*/}
                        {/*<option dataValue="Quận 3">Quận 3</option>*/}
                        {/*<option dataValue="Quận 4">Quận 4</option>*/}
                        {/*<option dataValue="Quận 5">Quận 5</option>*/}
                        {/*</ReactMaterialSelect>*/}
                        <Link to="/search"><Button waves='light' className="btn btn-search" onClick={this.handleClick}>Tìm
                            kiếm<Icon right>search</Icon></Button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        data: state.data.search.keysearch
    }
);

export default connect(
    mapStateToProps,
    {GetKeySearch}
)(Search)