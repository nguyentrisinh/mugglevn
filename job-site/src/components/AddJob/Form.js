import React from 'react';
import {Tabs,Tab } from 'react-materialize'
import FormCompany from './FormCompanyContainer'
import FormJob from './FormJobContainer'

export default class Form extends React.Component{
    render(){
        return(
            <div className=" my-container form-tab">
                <Tabs className='z-depth-1 tabs-fixed-width'>
                    <Tab title="Công ty" active>
                        <FormCompany/>
                    </Tab>
                    <Tab title="Công việc">
                        <FormJob/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}