/**
 * Created by Asus on 4/19/2017.
 */
import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import './CompanyInfo.css'
import JobComponent from './JobComponent'
import ReviewComponent from './ReviewComponent'


class CompanyInfo extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            jobs_list: this.props.data.jobs,
            reviews_list: this.props.data.evaluations,
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render(){
        var jobslist = this.state.jobs_list.map((job)=>{
            return (
                <JobComponent key={job.id} data={job}/>
            )
        });

        var reviewslist = this.state.reviews_list.map((review)=>{
            return (
                <ReviewComponent key={review.id} data={review}/>
            )
        });


        return(
            <div>
                <div className="company-short-info">
                    <div>
                        <img src={this.props.data.logo} className="img-avatar avatar-shadow" width="85px" height="85px" alt="admin@bootstrapmaster.com"/>
                    </div>
                    <strong>{this.props.data.name}</strong>
                    <p >{this.props.data.mo_ta_ngan} </p>
                </div>
                <hr/>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Jobs <span className="badge badge-success">{this.state.jobs_list.length} Jobs</span>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Reviews <span className="badge badge-success">{this.state.reviews_list.length} Reviews</span>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        {jobslist}
                    </TabPane>
                    <TabPane tabId="2">
                        {reviewslist}
                    </TabPane>

                </TabContent>


            </div>
        )
    }
}

export default CompanyInfo;