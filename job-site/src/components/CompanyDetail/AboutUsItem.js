import React from 'react';
import {Icon} from 'react-materialize'
import {Row, Col} from 'react-materialize'
import {Translator} from '../../utils/Translator'

export default class AboutUsItem extends React.Component {
    renderItem = (data) => {
        let arrayItems=['address','type','size','website'];
        return (
            arrayItems.map((item) => {
                return (
                    <Col s={12} key={item} className='grid-example icon-wrap'>

                        <Icon className='icon-border'>{Translator(item)}</Icon>
                        {(()=> {
                                switch (item) {
                                    case 'website':
                                        return (<a className="text" href={data[item]}>{data[item]}</a>);
                                        break;
                                    case 'type':
                                        if (data[item]===1)
                                            return (<span className="text">Công ty product</span>);
                                        else
                                            return (<span className="text">Công ty Outsourcing</span>);
                                        break;
                                    case 'size':
                                        return (<span className="text">Trên {data[item]} người</span>);
                                        break;
                                    default:
                                        return (<span className="text"> {data[item]}</span>);
                                }
                            }
                            )()}
                    </Col>
                )
            })
        )

    };

    render() {
        return (
            <Row>
                {this.renderItem(this.props.data)}
            </Row>
        )
    }
}