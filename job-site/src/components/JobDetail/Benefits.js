import React from 'react';
import {Collection,CollectionItem} from 'react-materialize'
import {TranslatorBenefit} from '../../utils/Translator';
import MultiLine from '../Helper/MultiLine'


export default class Benefits extends React.Component {
    renderItems = (items) => {
        return (items.map(
                (data) => {
                    return (
                        <CollectionItem key={data.id}>
                            <i className={TranslatorBenefit(data.id) + ' icon'} aria-hidden="true"></i>
                            <span>
                                <span><strong>{data.name+':'}</strong></span>
                                {MultiLine(data.description,'• ')}
                         </span>
                        </CollectionItem>




                    )
                }
            )
        )
    };

    render() {
        return (
            <div className="benefits section-benefit">
                <h5>Phúc lợi</h5>
                <Collection>
                    {
                        this.props.data.length <=0?
                        <p>Hiện không có thông tin phúc lợi</p>
                        : this.renderItems(this.props.data)
                    }


                </Collection>
            </div>

        )
    }
}
