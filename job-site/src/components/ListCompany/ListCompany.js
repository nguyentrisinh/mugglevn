import React from 'react';
import {Card, CardTitle, Row, Col} from 'react-materialize';
import {Link} from 'react-router'
import LoadingImage from '../Loading/LoadingImage'
import {connect} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import {FetchCompanyList,ResetListCompany} from '../../actions/index'

class ListCompany extends React.Component {
    componentDidMount(){
        console.log('hihi');
        // this.props.ResetListCompany();
    }
    loadItems(page){
        this.props.FetchCompanyList(page);

    };
    loader=()=>{
            return (<Col s={12} m={6} className='xl4'>
                <LoadingImage/>
            </Col>);

    };
    renderItems = (companies) => {
            console.log(companies);
            return (
                companies.data.map(
                    function (data) {
                        return (
                            <Col s={12} m={6} className='xl4' key={data.slug}>



                                <Card className='small'
                                      header={<CardTitle image={data.logo}></CardTitle>}
                                      actions={[<Link to={'/company/'+data.slug} href='#' key={data.slug}>{data.job_count} JOBS</Link>]}>
                                    <div className="company-name">

                                        <h5 ><Link to={'/company/'+data.slug}>{data.name} </Link></h5><span className="badge">{data.rating} <i
                                        className="fa fa-star">
                                </i>
                                    </span>

                                    </div>

                                    <p>{data.bio}</p>
                                </Card>
                            </Col>
                        )
                    }
                )
            )
    }

    render() {
        return (
        <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems.bind(this)}
            hasMore={this.props.data.hasMoreItems}
            loader={this.loader()}>

            <div className="wrap-companies margin-top-on-small-screen">
                <div className="my-container">
                    <h5 className="title">Các công ty tham gia</h5>
                    <Row>
                        {this.renderItems(this.props.data)}
                    </Row>
                    <br/>
                </div>
            </div>
        </InfiniteScroll>

        )
    }
}


const mapStateToProps = state => (
    {
        data: state.data.listcompany
    }
);

export default connect(
    mapStateToProps,
    {FetchCompanyList,ResetListCompany}
)(ListCompany)

