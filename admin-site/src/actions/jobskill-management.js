/**
 * Created by Asus on 5/10/2017.
 */
import * as types from '../constants/action-types'

export const addJobSkill = (jobskill) => {
    console.log("you have added:" + jobskill.job + jobskill.id);
    return{
        type: types.JOBSKILL_ADD,
        data: jobskill,
    }
};

export const deleteJobSkill = (jobskill) => {
    console.log("you have deleted:" + jobskill.job + jobskill.id);
    return{
        type: types.JOBSKILL_DELETE,
        data: jobskill,
    }
};

export const updateJobSkill = (jobskill) => {
    console.log("you have updated:" + jobskill.job + jobskill.id);
    return{
        type: types.JOBSKILL_UPDATE,
        data: jobskill,
    }
};
