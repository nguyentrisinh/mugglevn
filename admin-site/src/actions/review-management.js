/**
 * Created by Asus on 5/6/2017.
 */
import * as types from '../constants/action-types'

export const addReview = (review) => {
    console.log("you have added:" + review.title + review.id);
    return{
        type: types.REVIEW_ADD,
        data: review,
    }
};

export const deleteReview = (review) => {
    console.log("you have deleted:" + review.title + review.id);
    return{
        type: types.REVIEW_DELETE,
        data: review,
    }
};

export const updateReview = (review) => {
    console.log("you have updated:" + review.title + review.id);
    return{
        type: types.REVIEW_UPDATE,
        data: review,
    }
};