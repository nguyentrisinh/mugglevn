/**
 * Created by Asus on 5/10/2017.
 */
const dataAllSkill = {
    skill: [
        {
            label: "HTML",
            value: 1,
        },
        {
            label: "CSS",
            value: 2,
        },
        {
            label: "Java",
            value: 3,
        },
        {
            label: "MVC",
            value: 4,
        },
        {
            label: "Python",
            value: 5,
        }
    ]
};

export default function SkillData (state = dataAllSkill, action) {
    switch(action.type){
        default:
            return state;
    }
}