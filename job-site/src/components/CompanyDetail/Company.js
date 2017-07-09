import React from 'react';
import {Tabs, Tab} from 'react-materialize';
import OverView from './OverView'
import  ReviewContainer from './ReviewContainer'
import LoadingImage from '../Loading/LoadingImage'
import Map from './Map';
import {connect} from 'react-redux';
import {PropTypes} from 'react';
import {FetchCompany} from '../../actions/index'

class Company extends React.Component {
    renderLoading(loading) {
        if (loading) {
            return (
                <LoadingImage/>
            )
        }
        else {
            return (
                <Tabs className='tabs-fixed-width z-depth-1 '>
                    <Tab title="Tổng quan" active>
                        <OverView data={this.props.data.data}/>
                    </Tab>
                    <Tab title="Đánh giá">
                        <ReviewContainer company={this.props.params.slug} data={this.props.data.reviews}/>
                    </Tab>
                    <Tab title="Bản đồ">
                        <Map data={this.props.data.data}/>
                    </Tab>
                </Tabs>
            )
        }
    }

    componentWillMount() {
        this.props.FetchCompany(this.props.params.slug)
    }

    render() {
        return (
            <div className="my-tabs">
                {this.renderLoading(this.props.data.loading)}
            </div>

        );
    }
}

Company.propTypes = {
    data: PropTypes.object.isRequired

}
const mapStateToProps = state => (
    {
        data: state.data.companydetail
    }
)

export default connect(
    mapStateToProps,
    {FetchCompany}
)(Company)
