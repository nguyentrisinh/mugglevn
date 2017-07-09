/**
 * Created by Asus on 5/6/2017.
 */
/**
 * Created by Asus on 5/4/2017.
 */
import * as types from '../../constants/action-types'

const dataReview = {
    review: [
        {
            id: "1",
            title: "Lorem Ipsum",
            author: 1,
            what_user_like: "Không OT",
            what_user_dislike: "Không trả lương nhân viên",
            company: 1,
            rating: "4",
            liked_users: ["Adam", "Eva", "Con trâu bí ẩn", "Con cá nhảy dây", "Con tôm đi sở thú"],
            disliked_users: ["Lorem Ipsum", "anonymous_01", "Hello world"],
        },
        {
            id: "2",
            title: "Lorem Ipsum 2",
            author: 2,
            what_user_like: "Không OT",
            what_user_dislike: "Không trả lương nhân viên",
            company: 1,
            rating: "3",
            liked_users: ["Adam", "Eva", "Con trâu bí ẩn", "Con cá nhảy dây", "Con tôm đi sở thú"],
            disliked_users: ["Lorem Ipsum", "anonymous_01", "Hello world"],
        },
        {
            id: "3",
            title: "Lorem Ipsum",
            author: 3,
            what_user_like: "Không OT",
            what_user_dislike: "Không trả lương nhân viên",
            company: 1,
            rating: "4",
            liked_users: ["Con trâu bí ẩn", "Con cá nhảy dây", "Con tôm đi sở thú"],
            disliked_users: ["Lorem Ipsum", "anonymous_01", "Hello world"],
        }
    ]
};

export default function ReviewData (state = dataReview, action){
    switch(action.type){
        case types.REVIEW_ADD:
            console.log("hi there, test function in reducer");
            // return state;
            return Object.assign({}, state, {
                review: [
                    ...state.review,
                    action.data
                ]
            });
            break;
        case types.REVIEW_DELETE:
            console.log("You have deleted:" + action.data.title + " in this state");
            const newState = Object.assign([], state);
            const indexOfCompanyToDelete = state.review.findIndex(review => {
                return review.id === action.data.id
            });
            newState.review.splice(indexOfCompanyToDelete, 1);
            return newState;
            break;

        case types.REVIEW_UPDATE:
            console.log("You have updated:" + action.data.title + " " + "in this state");
            return {
                ...state,
                review: state.review.map(review => review.id === action.data.id ?
                    // transform the one with a matching id
                    { ...review,
                        id: action.data.id,
                        title: action.data.title,
                        author: action.data.author,
                        what_user_like: action.data.what_user_like,
                        what_user_dislike: action.data.what_user_dislike,
                        company: action.data.company,
                        rating: action.data.rating,
                        liked_users: action.data.liked_users,
                        disliked_users: action.data.disliked_users,
                    } :
                    // otherwise return original company
                    review
                )
            };

            break;

        default:
            return state;
    }
};