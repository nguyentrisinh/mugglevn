/**
 * Created by Asus on 4/24/2017.
 */
import * as types from '../../constants/action-types'

//note: nhớ thêm size và type vào create and Update Company info

const dataCompany = {
    company:[
        {
            id: "1",
            name: "VNG corp",
            slug: "vng-corp",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            logo: "img/avatars/2.jpg",
            nation_icon: "img/flags/Viet Nam.png",
            overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            type: 1,
            size: 300,
            district: 772,
            location: "Quận 11",
            rating: 35,
            address: "Flemington Tower, 182 Lê Đại Hành, phường 15, Quận 11, Hồ Chí Minh, Việt Nam",
            google_map: "https://www.google.com/maps/place/C%C3%B4ng+ty+c%E1%BB%95+ph%E1%BA%A7n+VNG/@10.7639382,106.6540761,17z/data=!3m1!4b1!4m5!3m4!1s0x31752eeca0d84b33:0xb98f29e0479d526a!8m2!3d10.7639382!4d106.6562648",
            website: "http://www.vng.com.vn",
            email: "vng@gmail.com",
            post_count: "15",
            total_post: "30",
            post_percentage: 50,

            jobs: [
                {
                    id:1,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                },
                {
                    id:2,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                },
                {
                    id:3,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                },
                {
                    id:4,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                }
            ],

            evaluations: [
                {
                    id: "1",
                    avatar: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor ornare, finibus dolor nec, ornare elit. Etiam feugiat aliquam urna id porta. Ut nibh ex, ultricies eu lorem vitae, placerat maximus nibh. Nam in libero tortor. Nulla pellentesque eget turpis quis maximus. ',
                    name: 'Nguyen Thanh Liem',
                    time: '2 minutes ago'
                }

            ],

        },

        {
            id:"2",
            name: "Yiorgos Avraamu",
            slug: "vng-corp",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            logo: "img/avatars/3.jpg",
            nation_icon: "img/flags/Viet Nam.png",
            overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            type: 2,
            size: 300,
            district: 761,
            location: "Quận 12",
            rating: 27,
            address: "1A, Tân Chánh Hiệp, Quận 12, Ho Chi Minh City, Việt Nam,",
            google_map: "https://www.google.com/maps/place/Cty+T%C6%B0%E1%BB%9Dng+Minh/@10.8560656,106.6288255,17z/data=!3m1!4b1!4m5!3m4!1s0x3175298afbc99bb5:0xc6cd53d6e9514561!8m2!3d10.8560656!4d106.6310142",
            website: "http://www.tma.com.vn",
            email: "tma@gmail.com",
            post_count: "15",
            total_post: "30",
            post_percentage: 50,

            jobs: [
                {
                    id:1,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                },
                {
                    id:2,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                },
                {
                    id:3,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                },
                {
                    id:4,
                    name: 'Mobile developer',
                    description: 'Being responsible for designing, developing and optimizing Zalo on the Android/iOS platform. Possess problem solving and analytical skills, including...',
                    tags: ['html5', 'css3']
                }
            ],

            evaluations: [
                {
                    avatar: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor ornare, finibus dolor nec, ornare elit. Etiam feugiat aliquam urna id porta. Ut nibh ex, ultricies eu lorem vitae, placerat maximus nibh. Nam in libero tortor. Nulla pellentesque eget turpis quis maximus. ',
                    name: 'Nguyen Thanh Liem',
                    time: '2 minutes ago'
                }

            ],
        }
    ]
};

export default function CompanyData (state = dataCompany, action){
    switch (action.type){
        case types.COMPANY_ADD:
            console.log("hi there, test function in reducer");
            // return state;
            return Object.assign({}, state, {
                company: [
                    ...state.company,
                    action.data
                ]
            });
            break;
        case types.COMPANY_DELETE:
            console.log("You have deleted:" + action.data.name + " in this state");
            const newState = Object.assign([], state);
            const indexOfCompanyToDelete = state.company.findIndex(company => {
                return company.id === action.data.id
            });
            newState.company.splice(indexOfCompanyToDelete, 1);
            return newState;
            break;
        case types.COMPANY_UPDATE:
            console.log("You have updated:" + action.data.name + " in this state");
            return {
                ...state,
                company: state.company.map(company => company.id === action.data.id ?
                    // transform the one with a matching id
                    { ...company,
                        id: action.data.id,
                        name: action.data.name,
                        slug: action.data.slug,
                        overview: action.data.overview,
                        logo: action.data.logo,
                        nation_icon: action.data.nation_icon,
                        bio: action.data.bio,
                        type: action.data.type,
                        size: action.data.size,
                        district: action.data.district,
                        location: action.data.location, //this attribute show the Company's district in text
                        rating: action.data.rating,
                        address: action.data.address,
                        google_map: action.data.google_map,
                        website: action.data.website,
                        email: action.data.email,
                    } :
                    // otherwise return original company
                    company
                )
            };

            break;
        default:
            return state;
    }
};