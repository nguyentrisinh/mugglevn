import React from 'react';
import {CollapsibleItem, Collapsible,Icon} from 'react-materialize'
import {TranslatorSkill} from '../../utils/Translator'
import MultiLine from '../Helper/MultiLine'
import {Link} from 'react-router'


export default class ListJob extends React.Component {
    renderItems = (items) => {
        return (
            items.map(
                (data) => {
                    return (
                        <div className="chip" style={{backgroundColor:TranslatorSkill(data.id).color}} key={data.id}>
                            <i className={TranslatorSkill(data.id).icon}>
                            </i>
                            {' '+data.name}
                        </div>
                    )
                }
            )
        )
    };
        renderJobs = (jobs) => {
            return (jobs.map(
                    (data) => {
                        return (
                        <CollapsibleItem key={data.id} iconClassName="icon" className='collapsible-item'
                                         header={<div className="header"><Icon>work</Icon><span className="text">{data.name}</span><i className="fa fa-caret-down"></i></div>}>
                            {this.renderItems(data.skills.data)}
                            <div>
                            {MultiLine(data.description,'')}
                            </div>
                            <div>
                                <Link style={{color:'#F1A121'}} to={'/job/'+data.id}>Chi tiết >></Link>
                            </div>


                        </CollapsibleItem>




                    )
                }
            )
        )
    };

    render() {
        return (
            <div className="wrap-collapsible jobs">
                <h5 className="title">Công việc có thể bạn thích</h5>
                <Collapsible>
                    {this.renderJobs(this.props.data)}
                </Collapsible>
            </div>

        )
    }
}
