import React from 'react';
import {CollapsibleItem, Collapsible} from 'react-materialize'
import {TranslatorSkill} from '../../utils/Translator';


export default class Skill extends React.Component {
    renderItems = (items) => {
        return (items.map(
                (data) => {
                    return (
                        <CollapsibleItem key={data.id} className='collapsible-item'
                                         header={
                                             <div className="wrap-skill">
                                                 <i style={{color:TranslatorSkill(data.id).color}} className={TranslatorSkill(data.id).icon}>
                                                 </i>
                                                 <span className="text">
                                                 {data.name}
                                             </span>

                                                 <i className="fa fa-caret-down">

                                                 </i>
                                             </div>
                                         }>


                            <p>{data.description}</p>


                        </CollapsibleItem>




                    )
                }
            )
        )
    };

    render() {
        return (
            <div className="wrap-collapsible section-skill">
                <h5>Kỹ năng yêu cầu</h5>
                <Collapsible>
                    {this.renderItems(this.props.data)}
                </Collapsible>
            </div>

        )
    }
}
