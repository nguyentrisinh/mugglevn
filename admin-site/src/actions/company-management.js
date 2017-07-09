/**
 * Created by Asus on 4/25/2017.
 */
import * as types from '../constants/action-types'

export const addCompany = (company) =>{
    console.log("you have added:" + company.name);
    return{
        type: types.COMPANY_ADD,
        data: company,
    }
};

export const deleteCompany = (company) => {
    console.log("you have deleted:" + company.name + company.id);
    return{
        type: types.COMPANY_DELETE,
        data: company,
    }
};

export const updateCompany = (company) => {
    console.log("you have updated:" + company.name);
    return {
        type: types.COMPANY_UPDATE,
        data: company,
    }
}