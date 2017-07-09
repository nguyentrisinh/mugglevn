/**
 * Created by Asus on 5/10/2017.
 */
import * as types from '../../constants/action-types'

const dataJobSkill = {
    jobskill: [
        {
            id: 1,
            job: 1,
            skill: 2,
            description: "Có kinh nghiệm sử dụng css 2 năm",
        },
        {
            id: 2,
            job: 1,
            skill: 1,
            description: "Có kinh nghiệm trong việc sử dụng html",
        },
        {
            id: 3,
            job: 2,
            skill: 3,
            description: "Không cần có kinh nghiệm làm việc với Javascript, sẽ được đào tạo lại",
        },
        {
            id: 4,
            job: 2,
            skill: 4,
            description: "Nắm vũng mô hình  MVC",
        }
    ],

    // jobskill_form_prop:{
    //     id: "",
    //     job: "",
    //     skill: "",
    //     description: "",
    //     flag_add: true,
    // }
};

export default function JobSkillData (state = dataJobSkill, action){
    switch(action.type){
        case types.JOBSKILL_ADD:
            console.log("hi there, test function in reducer");
            // return state;
            return Object.assign({}, state, {
                jobskill: [
                    ...state.jobskill,
                    action.data
                ]
            });
            break;

        case types.JOBSKILL_DELETE:
            console.log("You have deleted:" + action.data.job + " in this state");
            const newState = Object.assign([], state);
            const indexOfJobSkillToDelete = state.jobskill.findIndex(jobskill => {
                return jobskill.id === action.data.id
            });
            newState.jobskill.splice(indexOfJobSkillToDelete, 1);
            return newState;
            break;

        case types.JOBSKILL_UPDATE:
            console.log("You have updated:" + action.data.id + " " + "in this state");
            return {
                ...state,
                jobskill: state.jobskill.map(jobskill => jobskill.id === action.data.id ?
                    // transform the one with a matching id
                    { ...jobskill,
                        id: action.data.id,
                        job: action.data.job,
                        skill: action.data.skill,
                        description: action.data.description
                    } :
                    // otherwise return original company
                    jobskill
                )
            };

            break;
        default:
            return state;
    }
}