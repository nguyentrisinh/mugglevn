import React from 'react';
import {Card, Row, Col} from 'react-materialize';
import {TranslatorSkill} from '../../utils/Translator'
import LoadingImage from '../Loading/LoadingImage'
import TimeAgo from 'react-timeago'
import viStrings from 'react-timeago/lib/language-strings/vi'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(viStrings);
import {Link} from 'react-router';

import {connect} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import {FetchSearch} from '../../actions/index'

class SearchResult extends React.Component {
    loadItems(page){
        console.log(this.props.data.nextHrefs);
        this.props.FetchSearch(this.props.data.nextHrefs);
    }

    renderExpire(isNew) {
        if (isNew) {
            return (
                <div>

                    {/*<div className="new">New</div>*/}
                </div>
            )
        }
    }

    renderItems = (items) => {
        return (
            items.map(
                (data) => {
                    return (
                        <div className="chip" style={{backgroundColor: TranslatorSkill(data.id).color}} key={data.id}>
                            <i className={TranslatorSkill(data.id).icon}>
                            </i>{' ' + data.name}
                        </div>
                    )
                }
            )
        )
    };
    loader(){
        return (<Col s={12} l={6} className='xl4'>
            <LoadingImage/>
        </Col>);
    }
    renderJobs = (jobs) => {
        return (
            jobs.data.map(
                (data) => {
                    return (
                        <Col s={12} l={6} className='xl4' key={data.id}>
                            <Card className='small'
                                  header={<div className="card-image">
                                      {this.renderExpire(data.is_new)}
                                      <Link style={{flexShrink: '0'}} to={'/company/' + data.company_slug}>
                                          <img alt={data.company_name} className="avatar" src={data.company_logo}/>
                                      </Link>
                                      <div>
                                      <span className="job-name">
                                          <Link style={{color: 'white'}} to={'/job/' + data.id}>
                                          {data.name}
                                          </Link>
                                      </span>
                                          <span className="company-name">
                                          {data.company_name}, {data.company_district}
                                      </span>
                                          <TimeAgo date={data.created_at} formatter={formatter}

                                          />
                                      </div>
                                  </div>}
                                  actions={[<Link to={'job/' + data.id}>Chi tiết >></Link>]}
                            >
                                <div className="tags">
                                    {this.renderItems(data.skills.data)}
                                </div>
                                <p>{data.description}</p>
                            </Card>
                        </Col>
                    )
                }
            )
        )
    };

    render() {

        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.props.data.hasMoreItems}
                loader={this.loader()}>

                <div className="wrap-jobs">


                                <div className="my-container">
                                    <h5 className="title">Kết quả tìm kiếm</h5>
                                    <Row>
                                        {this.renderJobs(this.props.data)}

                                    </Row>

                </div>
                </div>
            </InfiniteScroll>
        )
    }
}

const mapStateToProps = state => (
    {
        data: state.data.search
    }
);

export default connect(
    mapStateToProps,
    {FetchSearch}
)(SearchResult)