/**
 * Created by Asus on 4/17/2017.
 */
import React, { Component } from 'react'
import TableRow from './table_row'



var dataCompany = {
    company:[
        {
            avatar: "img/avatars/1.jpg",
            name: "Yiorgos Avraamu",
            type_member: "New",
            register_day: "Registered: Jan 1, 2015",
            nation_icon: "img/flags/USA.png",
            post_percentage: "50",
            post_count: "15",
            total_post: "30",
            last_post: "10 sec ago"
        },
        {
            avatar: "img/avatars/1.jpg",
            name: "Yiorgos Avraamu",
            type_member: "New",
            register_day: "Registered: Jan 1, 2015",
            nation_icon: "img/flags/USA.png",
            post_percentage: "50",
            post_count: "15",
            total_post: "30",
            last_post: "10 sec ago"
        }
    ]
};


class Usertable extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataCompany1: dataCompany,
        }

    }

    render(){

        var allCompanies2 = this.state.dataCompany1.company.map((company) => {
            return (
                <TableRow data={company}/>
            )
        });

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Company
                            </div>
                            <div className="card-block">
                                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                                    <thead className="thead-default">

                                    <tr>
                                        <th className="text-center"><i className="icon-people"></i></th>
                                        <th>User</th>
                                        <th className="text-center">Country</th>
                                        <th>Post Percentage</th>

                                        <th>Last Post</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    {allCompanies2}
                                    </tbody>
                                </table>
                                <p/>
                                {/*<ul className="pagination">*/}
                                    {/*<li className="page-item"><a className="page-link" href="#" >Prev</a></li>*/}
                                    {/*<li className="page-item active">*/}
                                        {/*<a className="page-link" href="#">1</a>*/}
                                    {/*</li>*/}
                                    {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                                    {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                                    {/*<li className="page-item"><a className="page-link" href="#">4</a></li>*/}
                                    {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )



    }
}

export default Usertable;
