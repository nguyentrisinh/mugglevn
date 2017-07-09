/**
 * Created by Asus on 4/29/2017.
 */
import * as types from '../constants/action-types'

export const addJob = (job) =>{
    console.log("you have added:" + job.name);
    return{
        type: types.JOB_ADD,
        data: job,
    }
};

export const deleteJob = (job) => {
    console.log("you have deleted:" + job.name + job.id);
    return{
        type: types.JOB_DELETE,
        data: job,
    }
};

export const updateJob = (job) => {
    console.log("you have updated:" + job.name);
    return {
        type: types.JOB_UPDATE,
        data: job,
    }
}