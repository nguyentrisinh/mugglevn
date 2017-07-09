/**
 * Created by Asus on 5/1/2017.
 */
import * as types from '../../constants/action-types'

const dataUser = {
    user: [
        {
            id: "1",
            user: 'anonymous_01',
            password: "admin",
            superuser_status: false,
            role: 2,
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            is_female: true,
            first_name: "Như",
            last_name: "Nguyễn Trần Diệu",
            birth_date: "1996-09-08 00:00:00",
            email: "nguyentrandieunhu@gmail.com",
            university_name: "UIT",
            major_name: "master's bachelor",
            faculty_name: "Information System",
            address: "Quận 6, Sài Gòn",
        },
        {
            id: "2",
            user: 'anonymous_02',
            password: "user",
            superuser_status: false,
            role: 2,
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            is_female: false,
            first_name: "Sầu",
            last_name: "Phùng Nhục",
            birth_date: "1996-04-20 00:00:00",
            email: "phungnhucsau@gmail.com",
            university_name: "UIT",
            major_name: "master's bachelor",
            faculty_name: "Infomation security",
            address: "Quận Thủ Đức, Sài Gòn",
        },
        {
            id: "3",
            user: 'anonymous_03',
            password: "user",
            superuser_status: false,
            role: 2,
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            is_female: true,
            first_name: "Tâm",
            last_name: "Nguyễn Thiện",
            birth_date: "1996-01-01 00:00:00",
            email: "nguyenthientam@gmail.com",
            university_name: "UIT",
            major_name: "master's bachelor",
            faculty_name: "Computer Science",
            address: "Quận Phú Nhuận, Sài Gòn",
        }
    ]
};

export default function UserData (state = dataUser, action){
    switch(action.type){
        case types.USER_ADD:
            console.log("hi there, test function in reducer");
            // return state;
            return Object.assign({}, state, {
                user: [
                    ...state.user,
                    action.data
                ]
            });
            break;

        case types.USER_DELETE:
            console.log("You have deleted:" + action.data.name + " in this state");
            const newState = Object.assign([], state);
            const indexOfCompanyToDelete = state.user.findIndex(user => {
                return user.id === action.data.id
            });
            newState.user.splice(indexOfCompanyToDelete, 1);
            return newState;
            break;

        case types.USER_UPDATE:
            console.log("You have updated:" + action.data.user + " " + "in this state");
            return {
                ...state,
                user: state.user.map(user => user.id === action.data.id ?
                    // transform the one with a matching id
                    { ...user,
                        id: action.data.id,
                        user: action.data.user,
                        password: action.data.password,
                        superuser_status: action.data.superuser_status,
                        role: action.data.role,
                        bio: action.data.bio,
                        is_female: action.data.is_female,
                        first_name: action.data.first_name,
                        last_name: action.data.last_name,
                        birth_date: action.data.birth_date,
                        email: action.data.email,
                        university_name: action.data.university_name,
                        major_name: action.data.major_name,
                        faculty_name: action.data.faculty_name,
                        address: action.data.address,
                    } :
                    // otherwise return original company
                    user
                )
            };

            break;

        default:
            return state;
    }
};