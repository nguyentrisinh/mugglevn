/**
 * Created by Asus on 4/17/2017.
 */
import React, { Component } from 'react'
import { Progress } from 'reactstrap'

class TableRow extends Component{
    render(){
        return(
            <tr>
                <td className="text-center">
                    <div className="avatar">
                        <img src={this.props.data.avatar} className="img-avatar" alt="admin@bootstrapmaster.com"/>
                        <span className="avatar-status badge-success"></span>
                    </div>
                </td>
                <td>
                    <div>{this.props.data.name}</div>
                    <div className="small text-muted">
                        <span>{this.props.data.type_memeber}</span> | {this.props.data.register_day}
                    </div>
                </td>
                <td className="text-center">
                    <img src={'img/flags/USA.png'} alt="USA" style={{height: 24 + 'px'}}/>
                </td>
                <td>
                    <div className="clearfix">
                        <div className="float-left">
                            <strong>{this.props.data.post_percentage}%</strong>
                        </div>
                        <div className="float-right">
                            <small className="text-muted">{this.props.data.post_count}/{this.props.data.total_post} posts</small>
                        </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="50" />
                </td>
                <td>
                    <div className="small text-muted">Last post</div>
                    <strong>{this.props.data.last_post} </strong>
                </td>
            </tr>
        )
    }
}

export default TableRow;