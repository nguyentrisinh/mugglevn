/**
 * Created by Asus on 5/4/2017.
 */
import * as types from '../constants/action-types'

export const addSkill = (skill) => {
    console.log("you have added:" + skill.name + skill.id);
    return{
        type: types.SKILL_ADD,
        data: skill,
    }
};

export const deleteSkill = (skill) => {
    console.log("you have deleted:" + skill.name + skill.id);
    return{
        type: types.SKILL_DELETE,
        data: skill,
    }
};

export const updateSkill = (skill) => {
    console.log("you have updated:" + skill.name + skill.id);
    return{
        type: types.SKILL_UPDATE,
        data: skill,
    }
};