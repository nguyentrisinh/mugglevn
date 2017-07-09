import React from 'react'
import {Button,Icon} from 'react-materialize'

export default class TextArea extends React.Component {
    render() {
        return (
            <div className="input-wrap">

                <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label className="label" htmlFor="textarea1">Điều bạn thích?</label>
                </div>
                <div className="input-field col s12">
                    <textarea id="textarea2" className="materialize-textarea"></textarea>
                    <label className="label" htmlFor="textarea2">Điều bạn không thích ?</label>
                </div>
                <Button large={false} waves='light' className='button-send'>Gửi<Icon right>navigation</Icon></Button>
            </div>
        )
    }
}


