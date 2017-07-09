/**
 * Created by Asus on 5/4/2017.
 */
import React, {Component} from 'react'
import SkillRow from './SkillRow'


class UserBlock extends Component{
    render(){

        var SkillListRender = this.props.data.skill.map((skill) => {
            return(
                <SkillRow key={skill.id} data={skill} actions={this.props.actions}/>
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
                                    <th width="5%">id</th>
                                    <th width="95%">Skill's Name</th>

                                </tr>

                                </thead>
                                <tbody>
                                    {SkillListRender}
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