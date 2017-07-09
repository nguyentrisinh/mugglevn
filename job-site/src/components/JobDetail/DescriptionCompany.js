import React from 'react'
import {Icon} from 'react-materialize'
import {Translator} from '../../utils/Translator'
export default class DescriptionCompany extends React.Component{
    renderItems = (data) =>{
        let arrayItems=['address','type','size'];
        return (
            arrayItems.map(function(item){
                return(
                    <div className="icon-wrap" key={data.type}>
                        <Icon className='icon-border'>{Translator(item)}</Icon>
                        {(()=> {
                                switch (item) {
                                    case 'address':
                                        return (<span className="text">{data.company_address}</span>);
                                        break;
                                    case 'type':
                                            return (<span className="text">{data.company_type}</span>);
                                        break;
                                    case 'size':
                                        return (<span className="text">Trên {data.company_size} người</span>);
                                        break;
                                }
                            }
                        )()}
                    </div>
                )
            })
        )
    };
    render(){
        return(
            <div>
                {this.renderItems(this.props.data)}
            </div>
        )
    }
}