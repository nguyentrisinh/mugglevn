import React from 'react';
import Search from './Search'
export default class HomepageContainer extends React.Component {

    render() {
        return (
            <div className="homepage">
                    <div className="main">
                        <Search/>
                        {this.props.children}
                    </div>
             </div>
        )
    }
}