/**
 * Created by Asus on 5/7/2017.
 */
const dataAllUser = {
    user: [
        {
            label: "anonymous_01",
            value: 1,
        },
        {
            label: "anonymous_02",
            value: 2,
        },
        {
            label: "anonymous_03",
            value: 3,
        }
    ]
};


export default function AllCompanyData (state = dataAllUser, action){
    switch(action.type){
        default:
            return state;
    }
};