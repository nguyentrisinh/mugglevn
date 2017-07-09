/**
 * Created by Asus on 5/7/2017.
 */
const dataAllCompany = {
    company: [
        {
            id: 1,
            name: "VNG corp",
            type: 1,
            size: "300",
            avatar: "https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg",
            website:"https://www.vng.com.vn/",
            address: "Flemington Tower, 182 Lê Đại Hành, phường 15, Quận 11, Hồ Chí Minh, Việt Nam",
            district:"Quận 11",
            label: "VNG corp",
            value: 1,
        },
        {
            id: 2,
            name: "Yiorgos Avraamu",
            type: 2,
            size: "50",
            avatar: "img/avatars/3.jpg",
            website:"https://www.aaa.com.vn/",
            address: "1A, Tân Chánh Hiệp, Quận 12, Ho Chi Minh City, Việt Nam,",
            district:"Quận 12",
            label: "Yiorgos Avraamu",
            value: 2,
        },
    ]
};


export default function AllCompanyData (state = dataAllCompany, action){
    switch(action.type){
        default:
            return state;
    }
};