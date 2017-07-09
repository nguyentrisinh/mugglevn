import * as Actions from '../constants/ActionTypes';
const initialState =
    {
        userinfo: {
            "token": {
                "access_token": "",
                "expires": "",
                "is_expired": false,
                "refresh_token": ""
            },
            "user": {
                "username": "",
                "full_name": ""
            }
        },
        id: "2oOcENhbSXFMIEdIVYnTVhpyKqRlcOD4VOtYuGBo",
        secretkey: "1IYqoMAoc5z6F72cIhJxhUVMQD0RhY9qio5pqPTbrZq6uj5h2LoYpf80dO7bHECxLiE4qI0hO0WDcs4CuQgBvjqoTlXyB5wgJ3ooFSeQjbYj5fPe84whx7LB5wexpH0w",
        postrating: {
            "what_user_like": "",
            "what_user_dislike": "",
            "company": "",
            "rating": ''
        },
        profile: {
            loading: false,
            data: {
                name: 'Nguyễn Thanh Liêm',
                avatar: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t31.0-8/18238202_263239957418038_7061155600735430505_o.jpg?oh=c2b5d924bef67c47ff5a4cea29edfaff&oe=59C196FA',
                applyjobs: [
                    {
                        "id": 35,
                        "name": "Full-stack Javascript Intern",
                        "company_name": "KMS Technology",
                        "company_slug": "kmstechnology",
                        "company_logo": "https://mugglevngcs.storage.googleapis.com/logo/KMS-new.jpg?Signature=eZX8aoPs39oU4tUuhBQ0UjjXVz0%3D&Expires=1495334906&GoogleAccessId=GOOGYHHOMP2D2EZTEVOV",
                        "company_district": "Quận Tân Bình",
                        "description": "Support to implement new features for product\r\nSupport the marketing team to investigate issues if there is any concern from users\r\nOther tasks as assigned",
                        "created_at": "2017-05-20T07:55:35.859780Z",
                        "is_new": true,
                        "skills": {
                            "count": 7,
                            "data": [
                                {
                                    "name": "Năm 3 trở lên",
                                    "id": 9
                                },
                                {
                                    "name": "OOP và CTDL&GT",
                                    "id": 11
                                },
                                {
                                    "name": "HTML",
                                    "id": 3
                                },
                                {
                                    "name": "CSS",
                                    "id": 4
                                },
                                {
                                    "name": "Javascript",
                                    "id": 5
                                },
                                {
                                    "name": "Git/SVN",
                                    "id": 15
                                },
                                {
                                    "name": "Tiếng Anh tốt",
                                    "id": 10
                                }
                            ]
                        }
                    },
                    {
                        "id": 34,
                        "name": "Fresher Front-end Developer",
                        "company_name": "KMS Technology",
                        "company_slug": "kmstechnology",
                        "company_logo": "https://mugglevngcs.storage.googleapis.com/logo/KMS-new.jpg?Signature=eZX8aoPs39oU4tUuhBQ0UjjXVz0%3D&Expires=1495334906&GoogleAccessId=GOOGYHHOMP2D2EZTEVOV",
                        "company_district": "Quận Tân Bình",
                        "description": "Participate in all software development activities following Scrum process\r\nDesign solutions and approach for software features or subsystems\r\nWrite high quality code to implement software features or fix bugs\r\nPerform unit testing, documentation and all other activities defined in Definition of Done before passing source code to Testing team\r\nCommunicate and report internally or directly to client on status or result of work",
                        "created_at": "2017-05-20T07:43:02.924970Z",
                        "is_new": true,
                        "skills": {
                            "count": 4,
                            "data": [
                                {
                                    "name": "Tiếng Anh tốt",
                                    "id": 10
                                },
                                {
                                    "name": "Javascript",
                                    "id": 5
                                },
                                {
                                    "name": "Git/SVN",
                                    "id": 15
                                },
                                {
                                    "name": "Server-side Languages",
                                    "id": 31
                                }
                            ]
                        }
                    },
                    {
                        "id": 33,
                        "name": "Backend Developer Internship (Java) - CS",
                        "company_name": "VNG Corporation",
                        "company_slug": "vng",
                        "company_logo": "https://mugglevngcs.storage.googleapis.com/logo/vng-logo.png?Signature=7TAAOiXg%2FHI8x4dUFQW8XQniHs8%3D&Expires=1495334906&GoogleAccessId=GOOGYHHOMP2D2EZTEVOV",
                        "company_district": "Quận 10",
                        "description": "Phát triển và nghiên cứu các ứng dụng nằm trong hệ sinh thái 123cs. \r\nTham gia phát triển và nghiên cứu các ứng dụng sử dụng restfull api, service BE, ETL data, BigData.",
                        "created_at": "2017-05-20T07:28:42.015930Z",
                        "is_new": true,
                        "skills": {
                            "count": 5,
                            "data": [
                                {
                                    "name": "OOP và CTDL&GT",
                                    "id": 11
                                },
                                {
                                    "name": "C plus plus",
                                    "id": 8
                                },
                                {
                                    "name": "Kinh nghiệm",
                                    "id": 46
                                },
                                {
                                    "name": "Logic tốt",
                                    "id": 27
                                },
                                {
                                    "name": "Thái độ tốt",
                                    "id": 28
                                }
                            ]
                        }
                    },
                    {
                        "id": 32,
                        "name": "UX Design Fresher (Zalo)",
                        "company_name": "VNG Corporation",
                        "company_slug": "vng",
                        "company_logo": "https://mugglevngcs.storage.googleapis.com/logo/vng-logo.png?Signature=7TAAOiXg%2FHI8x4dUFQW8XQniHs8%3D&Expires=1495334906&GoogleAccessId=GOOGYHHOMP2D2EZTEVOV",
                        "company_district": "Quận 10",
                        "description": "Tham gia vào việc nghiên cứu và đưa ra các giải pháp thiết kế UX (user experience) cho các tính năng của sản phẩm để đáp ứng nhu cầu của người dùng.\r\nTham gia phân tích ý kiến phản hồi của người dùng, số liệu thống kê để nắm bắt khuynh hướng và hành vi người dùng nhằm đưa ra các giải pháp cải thiện phù hợp với định vị sản phẩm.\r\nPhối hợp với team phát triển kỹ thuật (engineering) để theo dõi tiến độ thực hiện các tính năng & đưa ra phản hồi trong quá trình xây dựng sản phẩm.",
                        "created_at": "2017-05-20T05:46:44.853090Z",
                        "is_new": true,
                        "skills": {
                            "count": 5,
                            "data": [
                                {
                                    "name": "Năm cuối",
                                    "id": 26
                                },
                                {
                                    "name": "Tiếng Anh tốt",
                                    "id": 10
                                },
                                {
                                    "name": "Kỹ năng mềm",
                                    "id": 29
                                },
                                {
                                    "name": "Logic tốt",
                                    "id": 27
                                },
                                {
                                    "name": "Kinh nghiệm",
                                    "id": 46
                                }
                            ]
                        }
                    },
                    {
                        "id": 31,
                        "name": "Associate Business Analyst",
                        "company_name": "YouNet Corporation",
                        "company_slug": "younet",
                        "company_logo": "https://mugglevngcs.storage.googleapis.com/logo/14495443_1284902564906192_4876069603630089950_n.png?Signature=RyHvkPOBoV0eUPpE0OtkhBuDgLE%3D&Expires=1495334906&GoogleAccessId=GOOGYHHOMP2D2EZTEVOV",
                        "company_district": "Quận 1",
                        "description": "Analyze feature list, have to research the product trends and products from other competitors\r\nDraw mockup for the product\r\nDraw some diagram (workflow diagram, state chart, use case diagram, etc) if need\r\nWork closely with designer to finalize the mockup and design\r\nWork closely with development team to transfer ideas, get feedback of other members\r\nPrepare some materials for product before release: posting, blog, announcement, take screenshots, FAQs\r\nDiscuss with client to gather the requirements\r\nBreak requirements into phases, discuss with PM to have the plan for project\r\nWrite feature list, draw mock up if need\r\nCreate specification\r\nWork closely with developer to transfer ideas, get feedback of other members\r\nWork closely with clients to get new requirements if any\r\nAssist PM on requirement sign off process",
                        "created_at": "2017-05-20T05:24:25.792270Z",
                        "is_new": true,
                        "skills": {
                            "count": 4,
                            "data": [
                                {
                                    "name": "Tiếng Anh tốt",
                                    "id": 10
                                },
                                {
                                    "name": "Kỹ năng mềm",
                                    "id": 29
                                },
                                {
                                    "name": "Kinh nghiệm",
                                    "id": 46
                                },
                                {
                                    "name": "Thái độ tốt",
                                    "id": 28
                                }
                            ]
                        }
                    },
                    {
                        "id": 30,
                        "name": "Fresher Program: PHP Engineer",
                        "company_name": "YouNet Corporation",
                        "company_slug": "younet",
                        "company_logo": "https://mugglevngcs.storage.googleapis.com/logo/14495443_1284902564906192_4876069603630089950_n.png?Signature=RyHvkPOBoV0eUPpE0OtkhBuDgLE%3D&Expires=1495334906&GoogleAccessId=GOOGYHHOMP2D2EZTEVOV",
                        "company_district": "Quận 1",
                        "description": "Work in social projects with tasks assigned by Project Manager\r\nGet coaching, supervising from Tech Leads",
                        "created_at": "2017-05-20T05:11:50.021830Z",
                        "is_new": true,
                        "skills": {
                            "count": 4,
                            "data": [
                                {
                                    "name": "ĐTB 7 trở lên",
                                    "id": 25
                                },
                                {
                                    "name": "OOP và CTDL&GT",
                                    "id": 11
                                },
                                {
                                    "name": "PHP",
                                    "id": 1
                                },
                                {
                                    "name": "Kinh nghiệm",
                                    "id": 46
                                }
                            ]
                        }
                    }
                ]
            }
        },
        listcompany: {
            data: [],
            hasMoreItems: true,
            nextHrefs: null
        },
        listjob: {

            data: [],
            hasMoreItems: true,
            nextHref: null
        },
        companydetail: {
            loading: true,
            data: {},
            reviews: []


        },
        job: {
            loading: true,
            data: {}
        },
        homepage: {
            companies: {
                loading: true,
                data: []
            }
            ,
            jobs: {
                loading: true,
                data: []
            }
        },
        search: {
            keysearch: '',
            hasdata: true,
            data: [],
            hasMoreItems: true,
            nextHrefs: null
        }
    };

export default function data(state = initialState, action) {
    switch (action.type) {
        case Actions.FETCH_HOMEPAGE_COMPANY:
            return Object.assign({}, state, {
                homepage: {
                    companies: {
                        loading: false,
                        data: [
                            ...action.payload

                        ]
                    },
                    jobs: state.homepage.jobs
                }
            });
        case Actions.FETCH_HOMEPAGE_JOB:
            return Object.assign({}, state, {
                homepage: {
                    companies: state.homepage.companies,
                    jobs: {
                        loading: false,
                        data: [
                            ...action.payload
                        ]
                    }
                }
            });
        case Actions.FETCH_COMPANY:
            return Object.assign({}, state, {
                companydetail: {
                    loading: action.loading,
                    data: action.payload,
                    reviews: state.companydetail.reviews
                }
            });
        case Actions.FETCH_JOB:
            return Object.assign({}, state, {
                job: {
                    loading: action.loading,
                    data: action.payload
                }
            });

        case Actions.FETCH_COMPANY_LIST:
            var next_page = action.payload.next_page !== null;
            return Object.assign({}, state, {
                listcompany: {
                    nextHrefs: action.payload.next_page,
                    data: [...state.listcompany.data, ...action.payload.list],
                    hasMoreItems: next_page,
                }
            });
        case Actions.FETCH_JOB_LIST:
            console.log('payloaddaa', action.payload.data);
            var next_page = action.payload.next_page !== null;
            return Object.assign({}, state, {
                listjob: {
                    nextHrefs: action.payload.next_page,
                    data: [...state.listjob.data, ...action.payload.data],
                    hasMoreItems: next_page,
                }
            });
        case Actions.RESET_LIST_COMPANY:
            return Object.assign({}, state, {
                listcompany: {
                    nextHrefs: null,
                    data: [],
                    hasMoreItems: true,
                }
            });
        case Actions.GET_KEY_SEARCH:
            return Object.assign({}, state, {
                search: {
                    keysearch: action.key,
                    data: [],
                    hasMoreItems: true,
                    nextHrefs: action.nextHrefs,
                }
            });
        case Actions.FETCH_SEARCH:
            var data = [];
            if (action.payload.data) {
                if (action.payload.data !== undefined || action.payload.data !== null) {
                    data = action.payload.data
                }
            }
            else if (action.payload.list){
               if  (action.payload.list !== undefined || action.payload.list !== null ) {
                    data = action.payload.list
            }

            }

            var next_page = action.payload.next_page;
            return Object.assign({}, state, {
                search: {
                    hasdata: !!action.payload.count,
                    keysearch: state.search.keysearch,
                    nextHrefs: action.payload.next_page,
                    data: [...state.search.data, ...data],
                    hasMoreItems: next_page,
                }
            });
        case Actions.FETCH_REVIEW:
            return Object.assign({}, state, {
                companydetail: {
                    loading: state.companydetail.loading,
                    data: state.companydetail.data,
                    reviews: action.payload.list
                }
            });
        case Actions.FETCH_USER:
            return Object.assign({}, state, {
                userinfo: action.payload,

            });
        default:
            return state
    }
}

