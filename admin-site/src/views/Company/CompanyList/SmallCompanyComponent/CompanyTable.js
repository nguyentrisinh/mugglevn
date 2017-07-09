/**
 * Created by Asus on 4/17/2017.
 */
import React, { Component } from 'react'
import TableRow from './table_row'



class Usertable extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataCompany1: this.props.data,
        }

    }


    render(){

        var allCompanies2 = this.state.dataCompany1.company.map((company) => {
            return (
                <TableRow
                    key={company.id}
                    data={company}
                    constant_data={this.props.constant_data}
                    deleteCompany={this.props.deleteCompany}
                    updateCompany={this.props.updateCompany}
                />
            )
        });

        return (
            <div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Company List
                            </div>
                            <div className="card-block">
                                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                                    <thead className="thead-default">

                                    <tr>
                                        <th className="text-center" width="10%"><i className="icon-people"></i></th>
                                        <th>Company's Name</th>
                                        <th className="text-center">Country</th>
                                        <th>Job Percentage</th>
                                    </tr>

                                    </thead>
                                    <tbody>
                                    {allCompanies2}
                                    </tbody>
                                </table>
                                <p/>
                            </div>
                        </div>
                    </div>
            </div>
        )



    }
}

export default Usertable;
