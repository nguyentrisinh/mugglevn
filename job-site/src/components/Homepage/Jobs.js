import React from 'react';
import {Card, Row, Col} from 'react-materialize';
import {TranslatorSkill} from '../../utils/Translator'
import LoadingImage from '../Loading/LoadingImage'
import TimeAgo from 'react-timeago'
import viStrings from 'react-timeago/lib/language-strings/vi'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(viStrings);
import {Link} from 'react-router';
export default class Jobs extends React.Component {
    componentWillMount() {
        this.props.FetchHomepageJob();
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
    renderJobs = (jobs) => {
        var indents = [];
        if (jobs.loading) {
            for (let i = 0; i < 6; i++) {
                indents.push(<Col key={i} s={12} l={6} className='xl4'>
                    <LoadingImage/>
                </Col>);
            }
            return (
                <div>
                    {indents}
                </div>
            )
        }
        else
            return (
                jobs.data.map(
                    (data) => {
                        return (
                            <Col s={12} l={6} className='xl4' key={data.id}>
                                <Card className='small'
                                      header={<div className="card-image">
                                          {this.renderExpire(data.is_new)}
                                          <Link style={{flexShrink:'0'}} to={'/company/' + data.company_slug}>
                                              <img alt={data.company_name} className="avatar" src={data.company_logo}/>
                                          </Link>
                                          <div>
                                      <span className="job-name">
                                          <Link style={{color:'white'}} to={'/job/'+data.id}>
                                          {data.name}
                                          </Link>
                                      </span>
                                              <span className="company-name">
                                          {data.company_name}, {data.company_district}
                                      </span>
                                              <TimeAgo date={data.created_at} formatter={formatter}/>
                                          </div>
                                      </div>}
                                      actions={[<Link key={data.id} to={'job/' + data.id}>Chi tiết >></Link>]}
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
            <div className="wrap-jobs">
                <div className="my-container">
                    <h5 className="title">Những cơ hội mới</h5>
                    <Row>
                        {this.renderJobs(this.props.data)}
                    </Row>
                </div>
            </div>
        )
    }
}