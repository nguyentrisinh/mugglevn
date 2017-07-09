import React from 'react';
import MultiLine from '../Helper/MultiLine'

export default class DescriptionJob extends React.Component {
    render() {
        return (
            <div className="description-job">
                <h5>Mô tả công việc</h5>
                <div className="content">
                    {MultiLine(this.props.data)}
                </div>
            </div>
        );

    }
}
