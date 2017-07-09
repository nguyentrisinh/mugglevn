/**
 * Created by Asus on 4/29/2017.
 */
import * as types from '../../constants/action-types'
const dataJob = {
    job:[
        {
            id: 1,
            name: 'Mobile developer',
            description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
            tags: ['html', 'css'],
            created_by: 1,
            benefit: 'Hands-on practice with Spring/Spring MVC/Strust2, Hibernate/JPA, EJB3/MDB, MySQL/T-SQL, HTML/CSS, JavaScript OOP and jQuery \n'
                     + 'Experience with OOP, DI/IoC, SOLID principles and software development best practices \n'
                     + 'Proficient in code review, code refactoring, Unit Testing \n',
            is_fulltime: false,
            // num_of_apply: "18",
            // num_required: "31",
            company: 1,
            company_name: "VNG corp",
            company_address: "Flemington Tower, 182 Lê Đại Hành, phường 15, Quận 11, Hồ Chí Minh, Việt Nam",
            company_avatar: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
            company_type: 1,
            company_size: "300+",
            company_website:"https://www.vng.com.vn/",
            district: "Quận 11, Tp Hồ Chí Minh",
        },
        {
            id: 2,
            name: 'Senior Java Developer',
            description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
            tags: ['OOP', 'MVC', 'Java'],
            created_by: 2,
            benefit: 'Hands-on practice with Spring/Spring MVC/Strust2, Hibernate/JPA, EJB3/MDB, MySQL/T-SQL, HTML/CSS, JavaScript OOP and jQuery \n'
            + 'Experience with OOP, DI/IoC, SOLID principles and software development best practices \n'
            + 'Proficient in code review, code refactoring, Unit Testing \n',
            is_fulltime: true,
            // num_of_apply: "4",
            // num_required: "5",
            company: 1,
            company_name: "Yiorgos Avraamu",
            company_avatar: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
            company_address: "Flemington Tower, 182 Lê Đại Hành, phường 15, Quận 11, Hồ Chí Minh, Việt Nam",
            company_type: 1,
            company_size: "300+",
            company_website:"https://www.vng.com.vn/",
            district: "Quận Tân Bình, Tp Hồ Chí Minh",
        },
        {
            id: 3,
            name: 'Senior Java Developer',
            description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
            tags: ['OOP', 'MVC', 'Java'],
            created_by: 3,
            benefit: 'Hands-on practice with Spring/Spring MVC/Strust2, Hibernate/JPA, EJB3/MDB, MySQL/T-SQL, HTML/CSS, JavaScript OOP and jQuery \n'
            + 'Experience with OOP, DI/IoC, SOLID principles and software development best practices \n'
            + 'Proficient in code review, code refactoring, Unit Testing \n',
            is_fulltime: true,
            // num_of_apply: "4",
            // num_required: "5",
            company: 1,
            company_name: "VNG corp",
            company_address: "Flemington Tower, 182 Lê Đại Hành, phường 15, Quận 11, Hồ Chí Minh, Việt Nam",
            company_avatar: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
            company_type: 1,
            company_size: "300+",
            company_website:"https://www.vng.com.vn/",
            district: "Quận Tân Bình, Tp Hồ Chí Minh",
        }
    ]
};


export default function JobData (state = dataJob, action){
    switch (action.type){
        case types.JOB_ADD:
            console.log("hi there, test function in reducer");
            // return state;
            return Object.assign({}, state, {
                job: [
                    ...state.job,
                    action.data
                ]
            });
            break;
        case types.JOB_DELETE:
            console.log("You have deleted:" + action.data.name + " in this state");
            const newState = Object.assign([], state);
            const indexOfCompanyToDelete = state.job.findIndex(job => {
                return job.id === action.data.id
            });
            newState.job.splice(indexOfCompanyToDelete, 1);
            return newState;
            break;

        case types.JOB_UPDATE:
            console.log("You have updated:" + action.data.name + " " + "in this state");
            return {
                ...state,
                job: state.job.map(job => job.id === action.data.id ?
                    // transform the one with a matching id
                    { ...job,
                        id: action.data.id,
                        name: action.data.name,
                        description: action.data.description,
                        tags: action.data.tags,
                        created_by: action.data.created_by,
                        benefit: action.data.benefit,
                        is_fulltime: action.data.is_fulltime,
                        // num_of_apply: action.data.num_of_apply,
                        // num_required: action.data.num_required,
                        company: action.data.company,
                        company_name: action.data.company_name,
                        company_avatar: action.data.company_avatar,
                        company_address: action.data.company_address,
                        company_type: action.data.company_type,
                        company_size: action.data.company_size,
                        company_website: action.data.company_website,
                        district: action.data.district,
                    } :
                    // otherwise return original company
                    job
                )
            };

            break;

        default:
            return state;
    }
};