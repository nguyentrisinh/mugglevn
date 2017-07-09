/**
 * Created by Asus on 5/1/2017.
 */
import * as types from '../constants/action-types'

export const addUser = (user) => {
    console.log("you have added:" + user.user + user.id);
    return{
        type: types.USER_ADD,
        data: user,
    }
};

export const deleteUser = (user) => {
    console.log("you have deleted:" + user.user + user.id);
    return{
        type: types.USER_DELETE,
        data: user,
    }
};

export const updateUser = (user) => {
    console.log("you have updated:" + user.user + user.id);
    return{
        type: types.USER_UPDATE,
        data: user,
    }
};