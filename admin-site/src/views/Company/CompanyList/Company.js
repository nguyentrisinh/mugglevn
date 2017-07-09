/**
 * Created by Asus on 4/18/2017.
 */
import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Line, Pie} from 'react-chartjs-2'

import * as actions from '../../../actions/company-management'

import CompanyTable from './SmallCompanyComponent/CompanyTable'




class Company extends Component{

    render(){
        return(
            <div>
                {/*<div className="card-columns cols-2">*/}
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Total Companies
                            </div>
                            <div className="card-block">
                                <div className="chart-wrapper">
                                    <Line data={this.props.company_statistics.totalcompanydata}
                                          options={{
                                              maintainAspectRatio: false
                                          }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                Company's Type Percentages
                            </div>
                            <div className="card-block">
                                <div className="chart-wrapper">
                                    <Pie data={this.props.company_statistics.pie} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr/>

                <CompanyTable
                    data={this.props.company_data}
                    constant_data={this.props.constant_data}
                    deleteCompany={this.props.actions.deleteCompany}
                    updateCompany={this.props.actions.updateCompany}
                />
            </div>
        )
    }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state){
    return{
        company_data: state.company_data,
        company_statistics: state.company_statistics,
        constant_data: state.constant_data
    };
}

function matchDispatchToProps(dispatch){
    // return bindActionCreators({deleteCompany: deleteCompany}, dispatch)
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Company);

// const Company = ({company_data, actions}) => (
//             <div>
//                 {/*<CompanyTable data={dataCompany}/>*/}
//                 <CompanyTable
//                     data={company_data}
//                     deleteCompany={actions.deleteCompany}
//                     updateCompany={actions.updateCompany}
//                 />
//             </div>
//
// )
//
// Company.propTypes = {
//     company_data: PropTypes.object.isRequired,
//     actions: PropTypes.object.isRequired
// }
//
// const mapStateToProps = state => (
//     {
//         company_data: state.company_data
//     }
// )
//
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(actions, dispatch)
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Company)