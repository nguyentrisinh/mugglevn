/**
 * Created by Asus on 5/4/2017.
 */
import * as types from '../../constants/action-types'

const dataSkill = {
    skill: [
        {
            id: 1,
            name: "HTML",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 2,
            name: "CSS",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 3,
            name: "Java",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 4,
            name: "MVC",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            id: 5,
            name: "Python",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        }
    ]
};

export default function SkillData (state = dataSkill, action){
    switch(action.type){
        case types.SKILL_ADD:
            console.log("hi there, test function in reducer");
            // return state;
            return Object.assign({}, state, {
                skill: [
                    ...state.skill,
                    action.data
                ]
            });
            break;

        case types.SKILL_DELETE:
            console.log("You have deleted:" + action.data.name + " in this state");
            const newState = Object.assign([], state);
            const indexOfCompanyToDelete = state.skill.findIndex(skill => {
                return skill.id === action.data.id
            });
            newState.skill.splice(indexOfCompanyToDelete, 1);
            return newState;
            break;

        case types.SKILL_UPDATE:
            console.log("You have updated:" + action.data.name + " " + "in this state");
            return {
                ...state,
                skill: state.skill.map(skill => skill.id === action.data.id ?
                    // transform the one with a matching id
                    { ...skill,
                        id: action.data.id,
                        name: action.data.name,
                        description: action.data.description
                    } :
                    // otherwise return original company
                    skill
                )
            };

            break;

        default:
            return state;
    }
};