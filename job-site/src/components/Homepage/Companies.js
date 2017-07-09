import React from 'react';
import {Card, CardTitle, Row, Col} from 'react-materialize';
import {Link} from 'react-router'
import LoadingImage from '../Loading/LoadingImage'

export default class Companies extends React.Component {
    componentWillMount(){
       this.props.FetchHomepageCompany();

    }
    renderItems = (companies) => {
        var indents = [];
        if (companies.loading){
            for (let i=0; i<6;i++){
               indents.push( <Col key={i} s={12} m={6} className='xl4'>
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
            <div className="wrap-companies">
                <div className="my-container">
                    <h5 className="title">Các công ty tham gia</h5>
                    <Row>
                        {this.renderItems(this.props.data)}
                    </Row>
                    <br/>
                </div>
            </div>
        )
    }
}