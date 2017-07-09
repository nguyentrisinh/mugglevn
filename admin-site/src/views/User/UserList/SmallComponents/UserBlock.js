/**
 * Created by Asus on 5/1/2017.
 */
import React, {Component} from 'react'
import UserRow from './UserRow'

class UserBlock extends Component{
    render(){

        var UserListRender = this.props.data.user.map((user) => {
            return(
                <UserRow key={user.id} data={user} actions={this.props.actions}/>
            )
        })

        return(
            <div>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            Users List
                        </div>
                        <div className="card-block">
                            <table className="table table-hover table-outline mb-0 hidden-sm-down">
                                <thead className="thead-default">

                                <tr>
                                    <th width="10%">Username</th>
                                    <th width="35%">Name</th>
                                    <th className="text-center" width="20%">University</th>
                                    <th className="text-center" width="10%">Birthday</th>
                                </tr>

                                </thead>
                                <tbody>
                                {UserListRender}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserBlock;